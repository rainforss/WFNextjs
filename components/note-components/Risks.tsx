import { Box, Flex, Text } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/tabs";
import * as React from "react";
import { risks, walterFedyBlue } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";

interface IRiskProps {}

const Risk: React.FunctionComponent<IRiskProps> = (props) => {
  return (
    <CustomTileWithoutChart title="Risks">
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
            Risks
          </Text>
        </Flex>
      </Flex>
      <Box bg="white" borderRadius="10px" p={4}>
        <Tabs variant="soft-rounded" colorScheme="green">
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
      </Box>
    </CustomTileWithoutChart>
  );
};

export default Risk;
