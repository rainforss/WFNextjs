import { Project } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../../../middleware/db";

type Modify<T, R> = Omit<T, keyof R> & R;

type ModifiedProject = Modify<
  Project,
  {
    OwnerClient: {
      Name: string;
      OwnerClientRevenue?: Decimal;
      BillingClientRevenue?: Decimal;
    };
    BillingClient: {
      Name: string;
      OwnerClientRevenue?: Decimal;
      BillingClientRevenue?: Decimal;
    };
  }
> | null;

const projectRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      const error = new Error("You need to sign in to view these records.");
      error.name = "Not Authenticated";
      throw error;
    }
    const { id, projectNumber } = req.query;
    switch (req.method) {
      case "GET":
        const project = await prisma.project.findFirst({
          where: {
            ProjectManager: id as string,
            ProjectNumber: projectNumber as string,
          },
        });

        if (!project) {
          const error = new Error(
            `Project with project number ${projectNumber} is not found.`
          );
          error.name = "Not Found";
          throw error;
        }

        const ownerClient = await prisma.client_Detail.findFirst({
          where: { ClientKey: project.OwnerClient! },
        });

        if (ownerClient) {
        }

        return res.status(200).json(project);
      case "POST":
        const updatedProject = await prisma.project.update({
          where: {
            ProjectNumber: projectNumber as string,
          },
          data: req.body,
        });
        return res.status(200).json(updatedProject);
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

export default projectRoute;
