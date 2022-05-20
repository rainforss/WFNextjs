import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex } from "@chakra-ui/layout";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import * as React from "react";

interface INumInputProps {
  label: string;
  value?: string;
  writable?: boolean;
}

const NumInput: React.FunctionComponent<INumInputProps> = ({
  label,
  value,
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
        <NumberInput w="100px" value={value} size="xs" isDisabled={!writable}>
          <NumberInputField value={value} />
          <NumberInputStepper w="0.8rem">
            <NumberIncrementStepper fontSize="0.5em" />
            <NumberDecrementStepper fontSize="0.5em" />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      {/* <FormHelperText hidden={writable} mx={4} fontSize="0.6rem">
        This field is read only
      </FormHelperText> */}
    </FormControl>
  );
};

export default NumInput;
