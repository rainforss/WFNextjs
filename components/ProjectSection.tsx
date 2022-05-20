import { Flex } from "@chakra-ui/react";
import { Project } from "@prisma/client";
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
  project: Project;
}

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
          <ClientInformation />
          <LocationInformation
            libraries={["places"]}
            lat={props.project.Latitude}
            lng={props.project.Longitude}
            address={props.project.Address}
            projectNumber={props.project.ProjectNumber}
          />
          <WfTeam />
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
          <ProjectNotes />
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
          <QualityInformation />
        </Flex>
      </Flex>
    </>
  );
};

export default React.memo(ProjectSection);
