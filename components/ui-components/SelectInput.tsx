import {
  ChakraProps,
  Flex,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import * as React from "react";
import { SelectOption } from "../../utils/types";

interface ISelectInputProps extends ChakraProps {
  value: string | null;
  label?: string;
  writable?: boolean;
  options?: SelectOption[];
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FunctionComponent<ISelectInputProps> = ({
  value,
  label,
  writable,
  options,
  onChange,
  ...chakraProps
}) => {
  return (
    <FormControl {...chakraProps}>
      <Flex w="100%" align="center" justify="space-between">
        {label && (
          <FormLabel
            mx={4}
            my={1}
            fontSize="0.7rem"
            maxW="80px"
            fontWeight="normal"
          >
            {label}
          </FormLabel>
        )}
        <Select
          w="100%"
          maxW="100px"
          isDisabled={!writable}
          size="xs"
          borderColor="black"
          bgColor="white"
          value={value || ""}
          onChange={onChange}
        >
          <option value="">Select Option</option>
          {options?.map((o) => (
            <option value={o.value} key={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </Flex>
      {/* <FormHelperText hidden={writable} mx={4} fontSize="0.6rem">
This field is read only
</FormHelperText> */}
    </FormControl>
  );
};

export default SelectInput;
