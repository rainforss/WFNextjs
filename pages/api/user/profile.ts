import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const profileRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    res.send({
      content: session,
    });
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
};

export default profileRoute;
