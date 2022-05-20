import { DefaultRawDatum } from "@nivo/pie";
import { IconType } from "react-icons";
import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    user: {
      /** The user's postal address. */
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
    };
  }
}

export type PieData = DefaultRawDatum & {
  label: string;
  color: string;
};

export type NavItem = {
  text: string;
  url: string;
  icon: IconType;
};

export type BarData = Record<string, string | number>;

export type Indicator = {
  status: string;
  color: string;
  description: string;
};

export type ProjectNote = {
  createdBy: string;
  date: Date;
  body: string;
};

export type Risk = {
  risk: string;
  date: Date;
  issue: string;
  mitigation: string;
  solvedBy: string;
};

export type LessonLearned = {
  createdBy: string;
  topic: string;
  link: string;
};

export type Issue = {
  name: string;
  status: "Active" | "Resolved";
  insurerInvolved: boolean;
  insurance: string;
  probabilityOfClaim: "Low" | "Medium" | "High";
};
