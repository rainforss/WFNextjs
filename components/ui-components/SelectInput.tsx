import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import * as React from "react";

interface ISelectInputProps {
  value: string;
  label: string;
  writable?: boolean;
}

const SelectInput: React.FunctionComponent<ISelectInputProps> = ({
  value,
  label,
  writable,
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
        <Select
          w="100px"
          isDisabled={!writable}
          size="xs"
          placeholder="Select option"
        >
          <option value={value}>{value}</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
      {/* <FormHelperText hidden={writable} mx={4} fontSize="0.6rem">
This field is read only
</FormHelperText> */}
    </FormControl>
  );
};

export default SelectInput;
