import { WarningIcon, InfoIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Tooltip, Text } from "@chakra-ui/react";
import { Project } from "@prisma/client";
import * as React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { RiEditFill, RiSaveFill } from "react-icons/ri";
import { walterFedyRed, walterFedyBlue } from "../utils/constants";

interface IProjectListItemProps {
  project: Project;
}

const ProjectListItem: React.FunctionComponent<IProjectListItemProps> = ({
  project,
}) => {
  return (
    <Box
      w={{ base: "100%", lg: "100%" }}
      minW="300px"
      borderRadius="15px"
      px={{ base: 0, lg: 2 }}
      my={4}
      bg={walterFedyRed}
    >
      <Flex
        height="60px"
        px={4}
        w="100%"
        align="center"
        justify="space-between"
      >
        <Flex color="white" fontSize="1rem" fontWeight="bold">
          <Text as="span">{project.Name}</Text>&nbsp;-&nbsp;
          <Text as="span">{project.ProjectNumber}</Text>
        </Flex>
        <Flex>
          <Flex>
            <IconButton
              aria-label="Edit Project"
              color="white"
              variant="outline"
              icon={<RiEditFill />}
              size="xs"
              mr={4}
              _hover={{ bg: walterFedyBlue }}
              as="a"
              href={`/projects/${project.ProjectNumber}`}
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
    </Box>
  );
};

export default ProjectListItem;
