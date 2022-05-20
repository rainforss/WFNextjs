import { Flex } from "@chakra-ui/layout";
import * as React from "react";
import { wfTeamFields } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import SelectInput from "../ui-components/SelectInput";
import TextInput from "../ui-components/TextInput";

interface IWfTeamProps {}

const WfTeam: React.FunctionComponent<IWfTeamProps> = (props) => {
  return (
    <CustomTileWithoutChart title="WF Team">
      <Flex w="100%" flexWrap="wrap">
        <Flex w="50%" flexDirection="column">
          {wfTeamFields.map((f) => {
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
          })}
        </Flex>
      </Flex>
    </CustomTileWithoutChart>
  );
};

export default WfTeam;
