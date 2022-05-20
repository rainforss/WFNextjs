import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/tabs";
import * as React from "react";
import { risks } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";

interface IRiskProps {}

const Risk: React.FunctionComponent<IRiskProps> = (props) => {
  return (
    <CustomTileWithoutChart title="Risks">
      <Tabs variant="soft-rounded" colorScheme="green" m={4}>
        <TabList flexWrap="wrap">
          {risks.map((r) => (
            <Tab key={r.issue} fontSize="0.7rem" w="50%">
              {r.risk} - {r.date.toLocaleDateString()}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {risks.map((r) => (
            <TabPanel
              key={r.issue}
              height="110px"
              overflowY="scroll"
              fontSize="0.7rem"
            >
              <p>
                Issue: {r.issue}, mitigation: {r.mitigation}, solved by:{" "}
                {r.solvedBy}
              </p>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </CustomTileWithoutChart>
  );
};

export default Risk;
