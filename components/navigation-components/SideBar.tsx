import { Box, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React, { ReactElement } from "react";
import UserProfile from "./UserProfile";
import { Group, User } from "@microsoft/microsoft-graph-types-beta";
import { walterFedyBlue, walterFedyRed } from "../../utils/constants";

interface SidebarChildrenProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onToggle?: () => void;
}

interface SidebarProps {
  AADUser?: User | undefined;
  groupData?: Group[] | undefined;
  imageData?: string | null;
  isOpen: boolean;
  isHidden: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  toggleHidden: () => void;
  children?:
    | ((args: SidebarChildrenProps) => ReactElement)
    | string
    | ReactElement;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  AADUser,
  groupData,
  imageData,
  isOpen,
  isHidden,
  onOpen,
  onClose,
  onToggle,
  toggleHidden,
}) => {
  return (
    <Box
      position="fixed"
      top="0"
      h="100vh"
      w={isOpen ? "250px" : isHidden ? "0px" : "60px"}
      bg={isHidden ? "transparent" : walterFedyBlue}
      transition="all 0.2s ease-in-out"
      overflowX="hidden"
      opacity={isHidden ? 0 : 1}
      onTouchStart={(e: any) => {
        console.log(e.target, e.currentTarget);
        if (!isOpen && e.target.id === "sidebar") {
          toggleHidden();
        }
      }}
    >
      <Box id="sidebar" h="100%" w="100%" position="relative">
        {children &&
          typeof children === "function" &&
          children({ isOpen, onClose, onOpen, onToggle })}
        {/* {children} */}
        <IconButton
          aria-label="Menu-Toggle"
          icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          position="absolute"
          bottom={3}
          left="10px"
          w="40px"
          h="40px"
          bg="transparent"
          color="whiteAlpha.800"
          borderRadius="8px"
          _hover={{ bg: walterFedyRed }}
          onClick={onToggle}
        />
        <UserProfile
          position="absolute"
          bottom="60px"
          left="10px"
          bg="transparent"
          color="whiteAlpha.800"
          borderRadius="8px"
          AADUser={AADUser}
          groupData={groupData}
          imageData={imageData}
        />
      </Box>
    </Box>
  );
};
