import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  IconButton,
  Spinner,
  StackDivider,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Project_Note } from "@prisma/client";
import * as React from "react";
import { useProjectNotes } from "../../hooks/useProjectNotes";
import { walterFedyBlue } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import Note from "./Note";
import NotesModal from "./NotesModal";

interface IProjectNotesProps {
  projectNumber: string;
  managerId?: string | null;
}

const ProjectNotes: React.FunctionComponent<IProjectNotesProps> = ({
  projectNumber,
  managerId,
}) => {
  const { projectNotes, isLoading, mutateProjectNotes } = useProjectNotes(
    managerId,
    projectNumber
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userId = "26073";
  return (
    <CustomTileWithoutChart title="Project Notes">
      <Flex
        height="50px"
        align="center"
        borderBottom={`${walterFedyBlue} 2px solid`}
        bgColor={walterFedyBlue}
        pb={4}
      >
        <Flex w="100%" justify="space-between">
          <Text
            as="h3"
            fontSize="1.2rem"
            fontWeight="bold"
            color="white"
            my="auto"
          >
            Project Notes
          </Text>

          <NotesModal
            onClose={onClose}
            onOpen={onOpen}
            isOpen={isOpen}
            userId={userId}
            projectNumber={projectNumber}
            mutate={mutateProjectNotes}
          />
        </Flex>
      </Flex>
      <Box bg="white" borderRadius="10px">
        {/* <Tabs variant="soft-rounded" colorScheme="green" p={4}>
          <TabList flexWrap="wrap">
            {projectNotes.map((n) => (
              <Tab key={n.body} fontSize="0.7rem" w="50%">
                {n.createdBy} - {n.date.toLocaleDateString()}
              </Tab>
            ))}
          </TabList>
          <TabPanels py={4}>
            {projectNotes.map((n) => (
              <TabPanel
                key={n.body}
                height="110px"
                overflowY="scroll"
                fontSize="0.7rem"
              >
                <p>{n.body}</p>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs> */}
        {isLoading && (
          <Center h="200px">
            <Spinner />
          </Center>
        )}
        {!isLoading && projectNotes.length !== 0 && (
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            p={4}
            align="stretch"
            h="300px"
            overflowY="auto"
          >
            {projectNotes.map((n) => (
              <Note key={n.Id} note={n} />
            ))}
          </VStack>
        )}
        {!isLoading && projectNotes.length === 0 && (
          <Center h="200px">
            <Text as="h4" fontWeight="bold">
              No project notes available
            </Text>
          </Center>
        )}
      </Box>
    </CustomTileWithoutChart>
  );
};

export default ProjectNotes;
