import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/tabs";
import * as React from "react";
import { projectNotes } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";

interface IProjectNotesProps {}

const ProjectNotes: React.FunctionComponent<IProjectNotesProps> = (props) => {
  return (
    <CustomTileWithoutChart title="Project Notes">
      <Tabs variant="soft-rounded" colorScheme="green" m={4}>
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
      </Tabs>
    </CustomTileWithoutChart>
  );
};

export default ProjectNotes;
