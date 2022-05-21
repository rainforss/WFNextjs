import { Link, StackDivider, VStack, Text, Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import * as React from "react";
import { lessonsLearned, walterFedyBlue } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";

interface ILessonsProps {}

const Lessons: React.FunctionComponent<ILessonsProps> = (props) => {
  return (
    <CustomTileWithoutChart title="Lessons Learned">
      <Flex
        height="50px"
        align="center"
        borderBottom={`${walterFedyBlue} 2px solid`}
        bgColor={walterFedyBlue}
        pb={4}
      >
        <Flex w="100%" justify="space-between">
          <Text
            as="h3"
            fontSize="1.2rem"
            fontWeight="bold"
            color="white"
            my="auto"
          >
            Lessons Learned
          </Text>
        </Flex>
      </Flex>
      <Box bg="white" borderRadius="10px" p={4}>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          m={4}
          align="stretch"
        >
          {lessonsLearned.map((l) => (
            <Link href={l.link} fontSize="0.7rem" key={l.topic}>
              {l.topic} - {l.createdBy}
            </Link>
          ))}
        </VStack>
      </Box>
    </CustomTileWithoutChart>
  );
};

export default Lessons;
