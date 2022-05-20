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
import { issues, threeIndicators } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import StatusIndicator from "../ui-components/StatusIndicator";

interface IQualityInformationProps {}

const QualityInformation: React.FunctionComponent<IQualityInformationProps> = (
  props
) => {
  return (
    <CustomTileWithoutChart title="Quality">
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <Box width={{ base: "100%", lg: "50%" }} px={2}>
          <Table variant="striped" colorScheme="teal" mx="auto" my={4}>
            <Thead>
              <Tr>
                <Th p={2} fontSize="0.7rem">
                  Reviews
                </Th>
                <Th p={2} isNumeric fontSize="0.7rem">
                  Date/Complete
                </Th>
                <Th p={2} fontSize="0.75rem">
                  <Flex>
                    <StatusIndicator
                      indicators={threeIndicators}
                      status="orange"
                    />
                  </Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody fontSize="0.75rem">
              <Tr>
                <Td p={2}>SD</Td>
                <Td p={2} isNumeric>
                  2020-01-01
                </Td>
                <Td p={2}>
                  <StatusIndicator
                    indicators={threeIndicators}
                    status="green"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td p={2}>DD</Td>
                <Td p={2} isNumeric>
                  2020-02-02
                </Td>
                <Td p={2}>
                  <StatusIndicator
                    indicators={threeIndicators}
                    status="orange"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td p={2}>CD</Td>
                <Td p={2} isNumeric>
                  2020-03-03
                </Td>
                <Td p={2}>
                  <StatusIndicator indicators={threeIndicators} status="red" />
                </Td>
              </Tr>
              <Tr>
                <Td p={2}>Construction</Td>
                <Td p={2}>321 | 456</Td>
                <Td p={2} isNumeric>
                  $1234
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <VStack
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
        </VStack>
      </Flex>
    </CustomTileWithoutChart>
  );
};

export default QualityInformation;
