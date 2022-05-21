import { Box, Center, Spinner } from "@chakra-ui/react";
import type { GetServerSidePropsContext, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { getSession, signIn, useSession } from "next-auth/react";
import { useProfile } from "../../hooks/useProfile";
import { useGroups } from "../../hooks/useGroups";
import ProjectListItem from "../../components/ProjectListItem";
import { useProjects } from "../../hooks/useProjects";
import { useEffect } from "react";

interface IProjectsProps {}

const Projects: NextPage<IProjectsProps> = () => {
  const { data: session, status } = useSession();

  const { groups } = useGroups(session?.accessToken);

  const { profile } = useProfile(session?.accessToken);

  const { projects } = useProjects("26073");

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);

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
          {status === "authenticated" && projects
            ? projects.map((p: any) => (
                <ProjectListItem key={p.ProjectNumber} project={p} />
              ))
            : null}
        </Box>
      </Layout>
    </>
  );
};

export default Projects;

export const getServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  try {
    const session = await getSession({ req });

    if (!session || !session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }
    return {
      props: {
        user: session.user,
      },
    };
  } catch (error: any) {
    console.log(error.message);
  }
};
