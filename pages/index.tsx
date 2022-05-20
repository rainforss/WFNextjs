import { Box, Center, Heading, Spinner, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/constants";
import { Layout } from "../components/Layout";
import { useSession } from "next-auth/react";
import { useProfile } from "../hooks/useProfile";
import { useGroups } from "../hooks/useGroups";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  const { data: session, status } = useSession();

  const { groups } = useGroups(session?.accessToken);

  console.log(groups);

  const { profile } = useProfile(session?.accessToken);

  return (
    <>
      <Layout
        AADUser={profile}
        groupData={groups?.value}
        imageData={session?.user.image}
      >
        <Box>
          {status === "loading" ? (
            <Center height="60vh">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          ) : null}
          {status === "authenticated" ? (
            <Box h="100%">
              <Heading as="h1" fontSize="1.5rem">
                Welcome back, {session.user.name}
              </Heading>
            </Box>
          ) : null}
        </Box>
      </Layout>
    </>
  );
};

export default Home;
