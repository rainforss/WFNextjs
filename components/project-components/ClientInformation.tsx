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
  Box,
} from "@chakra-ui/react";
import { Decimal } from "@prisma/client/runtime";
import axios from "axios";
import * as React from "react";
import { FaSave } from "react-icons/fa";
import { KeyedMutator } from "swr";
import {
  relationshipOptions,
  threeIndicators,
  walterFedyBlue,
} from "../../utils/constants";
import { formatCurrencyString } from "../../utils/formatCurrencyString";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import SelectInput from "../ui-components/SelectInput";
import StatusIndicator from "../ui-components/StatusIndicator";

interface IClientInformationProps {
  projectNumber: string;
  billingClient: string;
  ownerClient: string;
  billingClientRelationship: string | null;
  billingClientRevenue?: Decimal;
  ownerClientRelationship: string | null;
  ownerClientRevenue?: Decimal;
  mutateProject: KeyedMutator<any>;
}

const ClientInformation: React.FunctionComponent<IClientInformationProps> = ({
  projectNumber,
  billingClient,
  billingClientRelationship,
  billingClientRevenue,
  ownerClient,
  ownerClientRelationship,
  ownerClientRevenue,
  mutateProject,
}) => {
  const [editing, setEditing] = React.useState(false);
  const [relationshipStatuses, setRelationshipStatuses] = React.useState({
    ownerClientRelationship,
    billingClientRelationship,
  });

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
              onClick={async () => {
                setEditing(false);

                await axios.post(`/api/user/26073/projects/${projectNumber}`, {
                  OwnerClientRelationship:
                    relationshipStatuses.ownerClientRelationship,
                  BillingClientRelationship:
                    relationshipStatuses.billingClientRelationship,
                });
                await mutateProject();
              }}
            />
          )}
        </Flex>
      </Flex>
      <Box bg="white" borderRadius="10px">
        <Table
          variant="striped"
          colorScheme="teal"
          width="95%"
          mx="auto"
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
              <Td p={2}>{ownerClient} (Owning)</Td>
              <Td p={2} isNumeric>
                ${formatCurrencyString(ownerClientRevenue?.toString())}
              </Td>
              <Td p={2} isNumeric>
                $38000
              </Td>
              <Td p={2}>
                {editing ? (
                  <SelectInput
                    value={relationshipStatuses.ownerClientRelationship}
                    writable
                    options={relationshipOptions}
                    onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                      setRelationshipStatuses((prev) => ({
                        ...prev,
                        ownerClientRelationship: e.currentTarget.value,
                      }))
                    }
                  />
                ) : (
                  <StatusIndicator
                    indicators={threeIndicators}
                    status={ownerClientRelationship}
                  />
                )}
              </Td>
            </Tr>
            <Tr>
              <Td p={2}>{billingClient} (Billing)</Td>
              <Td p={2} isNumeric>
                ${formatCurrencyString(billingClientRevenue?.toString())}
              </Td>
              <Td p={2} isNumeric>
                $29000
              </Td>
              <Td p={2}>
                {editing ? (
                  <SelectInput
                    value={relationshipStatuses.billingClientRelationship}
                    writable
                    options={relationshipOptions}
                    onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                      setRelationshipStatuses((prev) => ({
                        ...prev,
                        billingClientRelationship: e.currentTarget.value,
                      }))
                    }
                  />
                ) : (
                  <StatusIndicator
                    indicators={threeIndicators}
                    status={billingClientRelationship}
                  />
                )}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </CustomTileWithoutChart>
  );
};

export default ClientInformation;
