import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId:
      process.env.NODE_ENV === "production"
        ? "a1d12291-f5d3-4089-a7b2-67f9f367597f"
        : "3a5e0893-b08e-42f4-bd48-d587685ec238",
    authority:
      process.env.NODE_ENV === "production"
        ? "https://login.microsoftonline.com/4ec69314-a70e-41ec-a1ae-52110c831b8f"
        : "https://login.microsoftonline.com/f73a1153-4de9-4008-861c-c39db89217b7",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read", "user.readbasic.all"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint:
    "https://graph.microsoft.com/v1.0/me?$select=displayName,userType,id,companyName,jobTitle,userPrincipalName",
  graphMeMemberEndpoint: "https://graph.microsoft.com/v1.0/me/memberOf",
  graphMePhotoEndpoint: "https://graph.microsoft.com/v1.0/me/photo/$value",
};
