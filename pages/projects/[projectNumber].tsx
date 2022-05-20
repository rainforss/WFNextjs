import { Box, Center, Spinner } from "@chakra-ui/react";
import type { GetServerSidePropsContext, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { getSession, signIn, useSession } from "next-auth/react";
import { useProfile } from "../../hooks/useProfile";
import { useGroups } from "../../hooks/useGroups";
import ProjectListItem from "../../components/ProjectListItem";
import { useProjects } from "../../hooks/useProjects";
import { useEffect } from "react";
import { ParsedUrlQuery } from "querystring";
import { Project } from "@prisma/client";
import ProjectCard from "../../components/ProjectCard";
import ProjectSection from "../../components/ProjectSection";
import { useProject } from "../../hooks/useProject";

interface IProjectProps {
  projectNumber: string;
}

interface IParams extends ParsedUrlQuery {
  projectNumber: string;
}

const ProjectPage: NextPage<IProjectProps> = ({ projectNumber }) => {
  const { data: session, status } = useSession();

  const { groups } = useGroups(session?.accessToken);

  const { profile } = useProfile(session?.accessToken);

  const { project, isLoading, mutateProject } = useProject(
    "26073",
    projectNumber
  );

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
          {status === "authenticated" && !isLoading ? (
            <ProjectSection project={project} />
          ) : null}
        </Box>
      </Layout>
    </>
  );
};

export default ProjectPage;

export const getServerSideProps = async ({
  req,
  res,
  params,
}: GetServerSidePropsContext) => {
  try {
    const session = await getSession({ req });
    const { projectNumber } = params as IParams;

    if (!session || !session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }

    // const project = await prisma?.project.findFirst({
    //   where: {
    //     ProjectNumber: projectNumber as string,
    //   },
    // });

    // if (!project) {
    //   return {
    //     notFound: true,
    //   };
    // }

    return {
      props: {
        user: session.user,
        projectNumber,
      },
    };
  } catch (error: any) {
    console.log(error.message);
  }
};
