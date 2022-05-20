import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavMenuButton } from "./NavMenuButton";
import { NavItem } from "../../utils/types";
import { useRouter } from "next/router";

interface NavMenuProps {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  navItems,
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  return (
    <Flex
      position="absolute"
      top={2}
      direction="column"
      w={isOpen ? "230px" : "40px"}
      left={"10px"}
    >
      {navItems.map((n) => (
        <NavMenuButton
          key={n.text}
          navItem={n}
          onClick={() => {
            if (!n.url.includes("https")) {
              router.push(n.url);
            }
          }}
        />
      ))}
    </Flex>
  );
};
