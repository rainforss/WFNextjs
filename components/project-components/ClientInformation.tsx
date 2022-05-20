import { EditIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { FaSave } from "react-icons/fa";
import { threeIndicators, walterFedyBlue } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import StatusIndicator from "../ui-components/StatusIndicator";

interface IClientInformationProps {
  projectNumber: string;
  billingClient: string;
  ownerClient: string;
  billingClientRelationship: string;
  ownerClientRelationship: string;
}

const ClientInformation: React.FunctionComponent<IClientInformationProps> = ({
  projectNumber,
}) => {
  const [editing, setEditing] = React.useState(false);
  return (
    <CustomTileWithoutChart title="Client Information">
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
            Client Information
          </Text>
          {!editing && (
            <IconButton
              aria-label="Edit"
              size="sm"
              icon={<EditIcon />}
              onClick={() => {
                setEditing(true);
              }}
            />
          )}
          {editing && (
            <IconButton
              aria-label="Save"
              size="sm"
              icon={<Icon as={FaSave} />}
              onClick={() => {
                setEditing(false);
                axios.post(`/api/user/26073/projects/${projectNumber}`, {});
              }}
            />
          )}
        </Flex>
      </Flex>
      <Table
        variant="striped"
        colorScheme="teal"
        width="95%"
        mx="auto"
        my={4}
        borderRadius="15px"
      >
        <Thead>
          <Tr fontSize="0.8rem">
            <Th p={2} fontSize="0.7rem">
              Party
            </Th>
            <Th p={2} isNumeric fontSize="0.7rem">
              Revenue
            </Th>
            <Th p={2} isNumeric fontSize="0.7rem">
              Pipe
            </Th>
            <Th p={2} fontSize="0.7rem">
              Relationship
            </Th>
          </Tr>
        </Thead>
        <Tbody fontSize="0.75rem">
          <Tr>
            <Td p={2}>Owner</Td>
            <Td p={2} isNumeric>
              $56000
            </Td>
            <Td p={2} isNumeric>
              $38000
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="green" />
            </Td>
          </Tr>
          <Tr>
            <Td p={2}>Billing Client</Td>
            <Td p={2} isNumeric>
              $44000
            </Td>
            <Td p={2} isNumeric>
              $29000
            </Td>
            <Td p={2}>
              <StatusIndicator indicators={threeIndicators} status="orange" />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </CustomTileWithoutChart>
  );
};

export default ClientInformation;
