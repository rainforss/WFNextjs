import { Flex } from "@chakra-ui/react";
import { Project, Project_Milestones, Project_Note } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import * as React from "react";
import Budget from "./financial-components/Budget";
import Cash from "./financial-components/Cash";
import ProjectPerformance from "./financial-components/ProjectPerformance";
import Revenue from "./financial-components/Revenue";
import Lessons from "./note-components/Lessons";
import ProjectNotes from "./note-components/ProjectNotes";
import Risks from "./note-components/Risks";
import ClientInformation from "./project-components/ClientInformation";
import LocationInformation from "./project-components/LocationInformation";
import QualityInformation from "./project-components/QualityInformation";
import WfTeam from "./project-components/WfTeam";

interface IProjectSectionProps {
  project: ModifiedProject;
}

type Modify<T, R> = Omit<T, keyof R> & R;

export type ModifiedProject = Modify<
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
    ProjectTeams: Array<{
      Id: string;
      Team: string;
      Practice: string;
      Employee: { EmployeeName: string; Department: string };
    }>;
    MileStones: Project_Milestones[];
  }
>;

export type ModifiedNote = Modify<
  Project_Note,
  {
    Created_By: {
      EmployeeName: string;
    };
  }
>;

const ProjectSection: React.FunctionComponent<IProjectSectionProps> = (
  props
) => {
  console.log(props.project);
  return (
    <>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justify="flex-start"
        pb={4}
        px={4}
        width="100%"
      >
        <Flex flexDirection="column" pb={4} width={{ base: "100%", lg: "34%" }}>
          <ClientInformation
            projectNumber={props.project.ProjectNumber}
            billingClient={props.project.BillingClient.Name}
            ownerClient={props.project.OwnerClient.Name}
            billingClientRelationship={props.project.BillingClientRelationship}
            ownerClientRelationship={props.project.OwnerClientRelationship}
            billingClientRevenue={
              props.project.BillingClient.BillingClientRevenue
            }
            ownerClientRevenue={props.project.OwnerClient.OwnerClientRevenue}
          />
          <LocationInformation
            libraries={["places"]}
            lat={props.project.Latitude}
            lng={props.project.Longitude}
            address={props.project.Address}
            projectNumber={props.project.ProjectNumber}
          />
          <WfTeam projectTeams={props.project.ProjectTeams} />
        </Flex>
        <Flex
          flexDirection="column"
          pb={4}
          mx="1%"
          width={{ base: "100%", lg: "40%" }}
        >
          <Budget />
          <Revenue />
          <Cash />
          <ProjectPerformance />
        </Flex>
        <Flex flexDirection="column" pb={4} width={{ base: "100%", lg: "24%" }}>
          <ProjectNotes
            projectNumber={props.project.ProjectNumber}
            managerId={props.project.ProjectManager}
          />
          <Risks />
          <Lessons />
        </Flex>
      </Flex>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justify="flex-start"
        pb={4}
        px={4}
        width="100%"
      >
        <Flex
          flexDirection="column"
          pb={4}
          width={{ base: "100%", lg: "100%" }}
        >
          <QualityInformation mileStones={props.project.MileStones} />
        </Flex>
      </Flex>
    </>
  );
};

export default React.memo(ProjectSection);
