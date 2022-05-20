import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import {
  Avatar,
  Box,
  Button,
  Center,
  ChakraProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  StackDivider,
  Text,
  useDisclosure,
  VStack,
  Image,
} from "@chakra-ui/react";
import { User, Group } from "@microsoft/microsoft-graph-types-beta";
import React from "react";

interface UserProfileProps extends ChakraProps {
  AADUser?: User | undefined;
  groupData?: Group[] | undefined;
  imageData?: string | null | undefined;
}

const UserProfile: React.FC<UserProfileProps> = ({
  AADUser,
  groupData,
  imageData,
  ...chakraProps
}: UserProfileProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        w="240px"
        bg="transparent"
        color="whiteAlpha.800"
        role="group"
        my={1}
        {...chakraProps}
        cursor="pointer"
        onClick={onOpen}
      >
        <Avatar
          src={imageData || ""}
          onClick={onOpen}
          w="40px"
          h="40px"
          borderRadius="8px"
          cursor="pointer"
          _hover={{ boxShadow: "0 0 0 3px rgba(66,153,225,0.6)" }}
        />
        <Text
          flex={1}
          textAlign="left"
          height="fit-content"
          as="p"
          pl="20px"
          _groupHover={{ color: "rgb(205, 47, 41)" }}
        >
          {AADUser?.displayName}
        </Text>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#111828" color="whiteAlpha.800">
          <DrawerCloseButton />
          <DrawerHeader>{AADUser?.displayName}</DrawerHeader>

          <DrawerBody>
            <Center>
              <Avatar my={4} mx="auto" size="xl" src={imageData || ""} />
            </Center>

            <Box my={6}>
              <Text as="p" color="#00548f" fontSize="1.1rem" textAlign="center">
                User Type
              </Text>
              {AADUser?.userType && (
                <Text as="p" my={2} textAlign="center">
                  {AADUser?.userType}
                </Text>
              )}
            </Box>
            <Text
              color="#00548f"
              as="p"
              mb={2}
              fontSize="1.1rem"
              textAlign="center"
            >
              Group Memberships
            </Text>
            {groupData && (
              <VStack
                divider={
                  <StackDivider
                    borderColor="whiteAlpha.300"
                    w="50%"
                    alignSelf="center"
                  />
                }
              >
                {groupData.map((g) => (
                  <Text key={g.id} as="span">
                    {g.displayName}
                  </Text>
                ))}
              </VStack>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              _hover={{ bg: "#cf143f" }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserProfile;
