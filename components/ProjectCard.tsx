import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Text } from "@chakra-ui/layout";
import * as React from "react";
import { walterFedyBlue, walterFedyRed } from "../utils/constants";
import { RiEditFill, RiSaveFill } from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Budget from "./financial-components/Budget";
import Cash from "./financial-components/Cash";
import ProjectPerformance from "./financial-components/ProjectPerformance";
import Revenue from "./financial-components/Revenue";
import { Collapse } from "@chakra-ui/transition";
import { Tooltip } from "@chakra-ui/react";
import ClientInformation from "./project-components/ClientInformation";
import LocationInformation from "./project-components/LocationInformation";
import WfTeam from "./project-components/WfTeam";
import ProjectNotes from "./note-components/ProjectNotes";
import QualityInformation from "./project-components/QualityInformation";
import Risks from "./note-components/Risks";
import Lessons from "./note-components/Lessons";
import { CheckCircleIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons";

interface IProjectCardProps {
  project: any;
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({
  project,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      w={{ base: "100%", lg: "100%" }}
      minW="300px"
      border={`${walterFedyRed} 2px solid`}
      mx={{ base: 0, lg: 2 }}
      my={4}
      bg="white"
    >
      <Flex
        height="60px"
        bg="white"
        px={4}
        align="center"
        justify="space-between"
        borderBottom={isOpen ? `${walterFedyRed} 2px solid` : "none"}
      >
        <Flex color={walterFedyRed} fontSize="1rem" fontWeight="bold">
          <Text as="span">{project.name}</Text>&nbsp;-&nbsp;
          <Text as="span">{project.projectNumber}</Text>
        </Flex>
        <Flex>
          <Flex>
            <IconButton
              aria-label="Edit Project"
              color={walterFedyRed}
              variant="outline"
              icon={<RiEditFill />}
              size="xs"
              mr={4}
              _hover={{ bg: walterFedyBlue }}
            />
            <IconButton
              aria-label="Save Project"
              color={walterFedyRed}
              variant="outline"
              icon={<RiSaveFill />}
              size="xs"
              mr={4}
              _hover={{ bg: walterFedyBlue }}
            />
            <IconButton
              aria-label="Save Project"
              color={walterFedyRed}
              variant="outline"
              icon={isOpen ? <FaAngleUp /> : <FaAngleDown />}
              size="xs"
              _hover={{ bg: walterFedyBlue }}
              onClick={onToggle}
            />
          </Flex>
          <Flex
            align="center"
            bg="white"
            ml={5}
            px={{ base: 1, md: 4 }}
            borderRadius="5px"
            fontSize={{ base: "10px", md: "16px" }}
          >
            <Tooltip hasArrow label="Revenue">
              <WarningIcon mx={2} color="red" />
            </Tooltip>
            <Tooltip hasArrow label="Budget">
              <InfoIcon mx={2} color="orange" />
            </Tooltip>
            <Tooltip hasArrow label="Cash">
              <CheckCircleIcon mx={2} color="green" />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen}>
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
            width={{ base: "100%", lg: "34%" }}
          >
            {/* <ClientInformation />
            <LocationInformation />
            <WfTeam /> */}
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
          <Flex
            flexDirection="column"
            pb={4}
            width={{ base: "100%", lg: "24%" }}
          >
            {/* <ProjectNotes /> */}
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
            {/* <QualityInformation /> */}
          </Flex>
        </Flex>
      </Collapse>
    </Box>
  );
};

export default ProjectCard;
