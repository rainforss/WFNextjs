import axios from "axios";
import NextAuth, { Session } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

const refreshAccessToken = async (token: any) => {
  try {
    const url = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token HTTP/1.1`;
    const body = new URLSearchParams({
      client_id: process.env.CLIENT_ID!,
      refresh_token: token.refreshToken,
      grant_type: "refresh_token",
      client_secret: process.env.CLIENT_SECRET!,
    });
    const result = await axios.post(url, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    return {
      ...token,
      accessToken: result.data.access_token,
      accessTokenExpires: Date.now() + result.data.expires_in * 1000,
      refreshToken: result.data.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      tenantId: process.env.TENANT_ID!,
      idToken: true,
      authorization: {
        params: {
          scope: "offline_access profile openid",
        },
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.AUTH_SECRET!,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    //This one gets called every time useSession or getSession is called
    jwt: async ({ token, account, user, profile }) => {
      try {
        if (account && user) {
          return {
            accessToken: account.access_token,
            accessTokenExpires:
              Date.now() + (account.ext_expires_in as number) * 1000,
            refreshToken: account.refresh_token,
            user,
            roles: profile!.roles,
          };
        }

        // Return previous token if the access token has not expired yet
        if (Date.now() < (token.accessTokenExpires as number)) {
          return token;
        }

        // Access token has expired, try to update it
        return refreshAccessToken(token);
      } catch (error: any) {
        console.log(error.message);
      }
    },
    session: async ({ token, session }) => {
      session.roles = token.roles;
      session.user = token.user as any;
      session.accessToken = token.accessToken as string;
      session.error = token.error;
      return session;
    },
  },
});
