import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { FaSave } from "react-icons/fa";
import { walterFedyBlue } from "../../utils/constants";

interface ICustomTileWithoutChartProps {
  title?: string;
  children: React.ReactNode;
}

const CustomTileWithoutChart: React.FunctionComponent<
  ICustomTileWithoutChartProps
> = (props) => {
  return (
    <Flex
      width={{ base: "100%", xl: "100%" }}
      minW="80%"
      direction="column"
      justify="space-between"
      borderRadius="15px"
      bg={walterFedyBlue}
      mt={4}
      p={4}
    >
      <Box w="100%">{props.children}</Box>
    </Flex>
  );
};

export default CustomTileWithoutChart;
