import {
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  StackDivider,
  VStack,
  Badge,
  Box,
  Center,
} from "@chakra-ui/react";
import * as React from "react";
import { issues, threeIndicators, walterFedyBlue } from "../../utils/constants";
import { ModifiedProject } from "../ProjectSection";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import StatusIndicator from "../ui-components/StatusIndicator";

interface IQualityInformationProps {
  mileStones: ModifiedProject["MileStones"];
}

const QualityInformation: React.FunctionComponent<IQualityInformationProps> = ({
  mileStones,
}) => {
  return (
    <CustomTileWithoutChart title="Quality">
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
            Quality Information
          </Text>
        </Flex>
      </Flex>
      <Box bg="white" borderRadius="10px">
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box width={{ base: "100%" }} px={2}>
            <Table variant="striped" colorScheme="teal" mx="auto" my={4}>
              <Thead>
                <Tr>
                  <Th p={2} fontSize="0.7rem">
                    Practice
                  </Th>
                  <Th p={2} fontSize="0.7rem">
                    Milestone Name
                  </Th>
                  <Th p={2} isNumeric fontSize="0.7rem">
                    Date/Complete
                  </Th>
                </Tr>
              </Thead>
              <Tbody fontSize="0.75rem">
                {mileStones.map((m) => (
                  <Tr key={m.Id}>
                    <Td p={2}>{m.Practice}</Td>
                    <Td p={2}>{m.Milestone_Name}</Td>
                    <Td p={2} isNumeric>
                      {m.Milestone_Date
                        ? m.Milestone_Date.toLocaleDateString()
                        : ""}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          {/* <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={3}
            width={{ base: "100%", lg: "50%" }}
            px={2}
            my={4}
            align="stretch"
          >
            <Flex justify="space-between" align="center">
              <Text
                as="h4"
                fontSize="0.75rem"
                fontWeight="bold"
                fontFamily="heading"
              >
                ISSUES
              </Text>
              <Center>
                <Badge variant="solid" bg="tomato" mr={2} fontSize="0.65rem">
                  ACTIVE
                </Badge>
                <Badge variant="solid" bg="grey" fontSize="0.65rem">
                  RESOLVED
                </Badge>
              </Center>
            </Flex>
            {issues.map((i) => (
              <Flex
                key={i.name}
                bg={i.status === "Active" ? "tomato" : "grey"}
                justify="space-between"
                p={2}
                align="center"
              >
                <Center>
                  <Text
                    as="span"
                    fontSize="0.75rem"
                    fontWeight="bold"
                    color="white"
                  >
                    {i.name}
                  </Text>
                  <Badge ml={2} fontSize="0.55rem">
                    {i.insurance}
                  </Badge>
                </Center>
                <Flex align="center">
                  <Badge
                    fontSize="0.55rem"
                    mx={2}
                    variant="solid"
                    colorScheme={
                      i.probabilityOfClaim === "High"
                        ? "red"
                        : i.probabilityOfClaim === "Medium"
                        ? "yellow"
                        : "green"
                    }
                  >
                    {i.probabilityOfClaim} Probability of Claim
                  </Badge>
                  <Badge fontSize="0.55rem">
                    Insurer {i.insurerInvolved ? "" : "not"} involved
                  </Badge>
                </Flex>
              </Flex>
            ))}
          </VStack> */}
        </Flex>
      </Box>
    </CustomTileWithoutChart>
  );
};

export default QualityInformation;
