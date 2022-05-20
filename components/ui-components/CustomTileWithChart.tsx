import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Collapse,
} from "@chakra-ui/react";
import * as React from "react";
import { threeIndicators, walterFedyBlue } from "../../utils/constants";
import TextInput from "./NumInput";
import StatusIndicator from "./StatusIndicator";

interface ICustomTileWithChartProps {
  title: string;
  fields: any[];
  chart?: React.ReactElement;
  fullSizeChart?: React.ReactElement;
  status?: "red" | "orange" | "green";
}

const CustomTileWithChart: React.FunctionComponent<
  ICustomTileWithChartProps
> = ({ title, fields, chart, fullSizeChart, status }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isTileOpen, onToggle: onTileToggle } = useDisclosure();
  return (
    <>
      <Flex
        width={{ base: "100%" }}
        minW="80%"
        direction="column"
        justify="space-between"
        border={`${walterFedyBlue} 2px solid`}
        mt={4}
      >
        <Flex
          height="50px"
          bg="white"
          justify="space-between"
          align="center"
          px={4}
          borderBottom={`${walterFedyBlue} 2px solid`}
          onClick={onTileToggle}
          cursor="pointer"
        >
          <Text
            as="h3"
            fontSize="1.2rem"
            fontWeight="bold"
            color={walterFedyBlue}
            my="auto"
          >
            {title}
          </Text>
          <Box w="100px">
            <StatusIndicator indicators={threeIndicators} status={status} />
          </Box>
        </Flex>

        <Collapse in={isTileOpen} animateOpacity>
          <Flex
            align="center"
            flexDirection={{ base: "column", xl: "row" }}
            flexWrap="wrap"
            mb={6}
          >
            <Flex
              w={{ base: "95%", md: "60%", xl: "40%" }}
              flexDirection="column"
            >
              {fields.map((f) => (
                <TextInput key={f.id} label={f.name} value={f.value} />
              ))}
            </Flex>

            {chart && (
              <Center
                cursor="pointer"
                w={{ base: "100%", xl: "60%" }}
                h="300px"
                flexGrow={2}
                onClick={() => onOpen()}
              >
                {chart}
              </Center>
            )}
          </Flex>
        </Collapse>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={12}>
            {fullSizeChart && (
              <Box w="100%" h="75vh">
                {fullSizeChart}
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomTileWithChart;
