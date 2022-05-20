import { Link, StackDivider, VStack } from "@chakra-ui/layout";
import * as React from "react";
import { lessonsLearned } from "../../utils/constants";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";

interface ILessonsProps {}

const Lessons: React.FunctionComponent<ILessonsProps> = (props) => {
  return (
    <CustomTileWithoutChart title="Lessons Learned">
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
    </CustomTileWithoutChart>
  );
};

export default Lessons;
