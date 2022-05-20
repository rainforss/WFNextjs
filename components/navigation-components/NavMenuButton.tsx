import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { NavItem } from "../../utils/types";

interface NavMenuButtonProps {
  navItem: NavItem;
  onClick: () => void;
}

export const NavMenuButton: React.FC<NavMenuButtonProps> = ({
  navItem,
  onClick,
}) => {
  if (navItem.url.includes("https")) {
    return (
      <a href={navItem.url} target="_blank" rel="noopener noreferrer">
        <Flex
          justify="space-between"
          align="center"
          w="270px"
          bg="transparent"
          color="whiteAlpha.800"
          my={1}
          role="group"
          cursor="pointer"
          onClick={onClick}
        >
          <Icon
            border="whitesmoke 2px solid"
            borderRadius="4px"
            padding={1}
            w="40px"
            h="40px"
            as={navItem.icon}
            _groupHover={{
              borderColor: "rgb(205, 47, 41)",
              color: "rgb(205, 47, 41)",
            }}
          />
          <Text
            flexGrow={3}
            pl="20px"
            _groupHover={{ color: "rgb(205, 47, 41)" }}
          >
            {navItem.text}
          </Text>
        </Flex>
      </a>
    );
  }
  return (
    <Flex
      justify="space-between"
      align="center"
      w="270px"
      bg="transparent"
      color="whiteAlpha.800"
      my={1}
      role="group"
      cursor="pointer"
      onClick={onClick}
    >
      <Icon
        border="whitesmoke 2px solid"
        borderRadius="4px"
        padding={1}
        w="40px"
        h="40px"
        as={navItem.icon}
        _groupHover={{
          borderColor: "rgb(205, 47, 41)",
          color: "rgb(205, 47, 41)",
        }}
      />
      <Text flexGrow={3} pl="20px" _groupHover={{ color: "rgb(205, 47, 41)" }}>
        {navItem.text}
      </Text>
    </Flex>
  );
};
