import * as React from "react";
import {
  projectPerformanceData,
  projectPerformanceFields,
} from "../../utils/constants";
import ProjectPerformancePieChart from "./ProjectPerformancePieChart";
import CustomTile from "../ui-components/CustomTileWithChart";

interface IProjectPerformanceProps {}

const ProjectPerformance: React.FunctionComponent<IProjectPerformanceProps> = (
  props
) => {
  return (
    <CustomTile
      title="Project Performance"
      fields={projectPerformanceFields}
      chart={<ProjectPerformancePieChart data={projectPerformanceData} />}
      fullSizeChart={
        <ProjectPerformancePieChart data={projectPerformanceData} fullSize />
      }
      status="green"
    />
  );
};

export default ProjectPerformance;
