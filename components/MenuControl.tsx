import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import * as React from "react";

interface IMenuControlProps {
  isSidebarHidden: boolean;
  toggleSidebar: () => void;
}

const MenuControl: React.FunctionComponent<IMenuControlProps> = ({
  isSidebarHidden,
  toggleSidebar,
}) => {
  return (
    <IconButton
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex={99}
      opacity={isSidebarHidden ? 1 : 0}
      visibility={isSidebarHidden ? "visible" : "hidden"}
      aria-label="Menu Pop-up"
      colorScheme="teal"
      icon={<HamburgerIcon fontSize="1.5rem" />}
      transition="all 0.2s ease-in-out"
      onClick={toggleSidebar}
    />
  );
};

export default MenuControl;
