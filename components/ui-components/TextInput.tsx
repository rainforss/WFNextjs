import { Flex } from "@chakra-ui/layout";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as React from "react";

interface ITextInputProps {
  value: string;
  label: string;
  writable?: boolean;
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({
  value,
  writable,
  label,
}) => {
  return (
    <FormControl my={4} minWidth="200px">
      <Flex align="center" justify="space-between">
        <FormLabel
          mx={4}
          my={1}
          fontSize="0.7rem"
          maxW="80px"
          fontWeight="normal"
        >
          {label}
        </FormLabel>
        <Input w="100px" value={value} size="xs" isDisabled={!writable} />
      </Flex>
      {/* <FormHelperText hidden={writable} mx={4} fontSize="0.6rem">
    This field is read only
  </FormHelperText> */}
    </FormControl>
  );
};

export default TextInput;
