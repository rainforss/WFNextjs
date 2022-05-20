import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface PageWrapperProps {
  children?: ReactNode;
  isSidebarOpen: boolean;
  isSidebarHidden: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  isSidebarOpen,
  isSidebarHidden,
  children,
}) => {
  return (
    <Box
      w={
        isSidebarOpen
          ? "calc(100% - 250px)"
          : isSidebarHidden
          ? "100%"
          : "calc(100% - 60px)"
      }
      position="absolute"
      left={isSidebarOpen ? "250px" : isSidebarHidden ? "0px" : "60px"}
      top="10vh"
      transition="all 0.2s ease-in-out"
      padding={8}
      minHeight="90vh"
      overflowY="hidden"
      overflowX="scroll"
    >
      <Box>{children}</Box>
    </Box>
  );
};
