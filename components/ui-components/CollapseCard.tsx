import { useDisclosure } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import * as React from "react";
import { walterFedyRed } from "../../utils/constants";

interface ICollapseCardProps {
  cardHeader: React.FunctionComponent<{
    isOpen: boolean;
    onToggle: () => void;
  }>;
  cardBody: React.ReactNode;
}

const CollapseCard: React.FunctionComponent<ICollapseCardProps> = ({
  cardHeader,
  cardBody,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Box height="200px" bg={walterFedyRed}>
        {cardHeader({ isOpen, onToggle })}
      </Box>
      <Box>{cardBody}</Box>
    </Box>
  );
};

export default CollapseCard;
