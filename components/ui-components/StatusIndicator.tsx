import Icon from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { ChakraProps } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";
import * as React from "react";
import { FaDotCircle } from "react-icons/fa";
import { Indicator } from "../../utils/types";

interface IStatusIndicatorProps extends ChakraProps {
  indicators: Indicator[];
  status?: "red" | "orange" | "green";
}

const StatusIndicator: React.FunctionComponent<IStatusIndicatorProps> = ({
  indicators,
  status,
  ...chakraProps
}) => {
  return (
    <Flex w="100%" minWidth="100px" {...chakraProps}>
      {indicators.map((i) => (
        <Tooltip
          hasArrow
          key={i.status}
          label={i.status + ": " + i.description}
        >
          <span>
            <Icon
              as={FaDotCircle}
              mx={2}
              color={i.color === status ? i.color : "grey"}
            />
          </span>
        </Tooltip>
      ))}
    </Flex>
  );
};

export default StatusIndicator;
