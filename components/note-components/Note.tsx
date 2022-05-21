import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { ModifiedNote } from "../ProjectSection";

interface INoteProps {
  note: ModifiedNote;
}

const Note: React.FunctionComponent<INoteProps> = ({ note }) => {
  return (
    <Box>
      <Flex justify="space-between" alignItems="flex-start">
        <Box mb={4}>
          <Text as="h4" fontWeight="bold">
            {note.Title}
          </Text>
          <Text as="small" fontSize="0.6rem">
            {note.Created_By.EmployeeName}
          </Text>
        </Box>
        <Text as="small">{new Date(note.Created_At).toLocaleDateString()}</Text>
      </Flex>
      <Text as="p">{note.Description}</Text>
    </Box>
  );
};

export default Note;
