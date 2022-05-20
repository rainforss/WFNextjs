import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../../../middleware/db";

const projectsRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      const error = new Error("You need to sign in to view these records.");
      error.name = "Not Authenticated";
      throw error;
    }
    const { id } = req.query;
    switch (req.method) {
      case "GET":
        const projects = await prisma.project.findMany({
          where: {
            ProjectManager: id as string,
          },
          take: 5,
          orderBy: {
            ProjectNumber: "desc",
          },
        });

        if (projects.length === 0) {
          const error = new Error(
            `Not projects were found for this project manager.`
          );
          error.name = "Not Found";
          throw error;
        }

        return res.status(200).json(projects);
      default:
        const error = new Error(
          `Method ${req.method} is not supported by this endpoint.`
        );
        error.name = "Not Supported";
        throw error;
    }
  } catch (error: any) {
    if (error.name === "Not Supported") {
      return res.status(405).json({ error });
    }
    if (error.name === "Not Authenticated") {
      return res.status(401).json({ error });
    }
    if (error.name === "Not Found") {
      return res.status(404).json({ error });
    }
  }
};

export default projectsRoute;
