import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../../../../../middleware/db";

const notesRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      const error = new Error("You need to sign in to view these records.");
      error.name = "Not Authenticated";
      throw error;
    }
    const { id, projectNumber } = req.query;

    switch (req.method) {
      case "POST":
        const createdNote = await prisma.project_Note.create({
          data: {
            ...req.body,
            Created_At: new Date(),
            Created_By: id,
            Project_Number: projectNumber,
          },
        });
        return res.status(200).json(createdNote);
      case "GET":
        console.log(req.method, id, projectNumber);
        const notes: any[] = await prisma.project_Note.findMany({
          where: {
            Project_Number: projectNumber as string,
          },
        });

        const authorsPromises: any[] = [];
        notes.forEach((n) =>
          authorsPromises.push(
            prisma.employee.findFirst({
              where: {
                Employee: n.Created_By,
              },
              select: {
                EmployeeName: true,
              },
            })
          )
        );
        const result = await Promise.all(authorsPromises);
        notes.forEach((n, index) => (n.Created_By = result[index]));

        return res.status(200).json(notes);
      default:
        const error = new Error(
          `Method ${req.method} is not supported by this endpoint.`
        );
        error.name = "Not Supported";
        throw error;
    }
  } catch (error: any) {
    console.log(error);
    if (error.name === "Not Supported") {
      return res.status(405).json({ error });
    }
    if (error.name === "Not Authenticated") {
      return res.status(401).json({ error });
    }
    if (error.name === "Not Found") {
      return res.status(404).json({ error });
    }
    return res.status(500).json({ error });
  }
};

export default notesRoute;
