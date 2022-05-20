import { Box, Button, Center, Heading, Image } from "@chakra-ui/react";
import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession, signIn } from "next-auth/react";

const Login: NextPage = () => {
  return (
    <Center
      h="100vh"
      w="100%"
      bg="linear-gradient(to bottom right, #e31837 0%, #767676 100%)"
    >
      <Box
        w="30%"
        h="80vh"
        bg="white"
        borderRadius="10px"
        p="2rem"
        position="relative"
      >
        <Image
          src="/WF_Logo.jpg"
          alt="Walter Fedy"
          position="absolute"
          w="180px"
          top="5rem"
          left="50%"
          transform="translateX(-50%)"
        />
        <Heading
          as="h2"
          p="1rem"
          pt="10rem"
          fontWeight="normal"
          color="#e31837"
          fontSize="2.1rem"
          textAlign="center"
          textTransform="uppercase"
        >
          Please Sign-in
        </Heading>
        <Center>
          <Button
            onClick={() => {
              signIn("azure-ad", { callbackUrl: "/" });
            }}
          >
            Office 365 Sign-In
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Login;

// export const getServerSideProps = async ({
//   req,
//   res,
// }: GetServerSidePropsContext) => {
//   const session = await getSession({ req });

//   if (session && session.user && session.user.email) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };
