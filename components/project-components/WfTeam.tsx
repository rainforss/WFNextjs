import { Flex, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import * as React from "react";
import { walterFedyBlue, wfTeamFields } from "../../utils/constants";
import { ModifiedProject } from "../ProjectSection";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import SelectInput from "../ui-components/SelectInput";
import TextInput from "../ui-components/TextInput";

interface IWfTeamProps {
  projectTeams: ModifiedProject["ProjectTeams"];
}

const WfTeam: React.FunctionComponent<IWfTeamProps> = ({ projectTeams }) => {
  return (
    <CustomTileWithoutChart title="WF Team">
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
            Team Information
          </Text>
        </Flex>
      </Flex>
      <Box bg="white" borderRadius="10px">
        <Flex w="100%" flexWrap="wrap">
          <Flex w="100%" flexDirection="column">
            {/* <TextInput label="Project Manager" value="Luke Demeter" /> */}
            {projectTeams.map((pt) => (
              <TextInput
                key={pt.Id}
                label={pt.Team}
                value={pt.Employee.EmployeeName}
              />
            ))}
            {/* {wfTeamFields.map((f) => {
            if (f.type === "text") {
              return (
                <TextInput label={f.name} value={f.value} key={f.id} writable />
              );
            }
            if (f.type === "select") {
              return (
                <SelectInput
                  label={f.name}
                  value={f.value}
                  key={f.id}
                  writable
                />
              );
            }
            return null;
          })} */}
          </Flex>
        </Flex>
      </Box>
    </CustomTileWithoutChart>
  );
};

export default WfTeam;
