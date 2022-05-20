import { Box } from "@chakra-ui/layout";
import { Datum, ResponsiveBullet } from "@nivo/bullet";
import * as React from "react";

interface IRevenueBulletChartProps {
  data: Datum[];
  fullSize?: boolean;
}

const RevenueBulletChart: React.FunctionComponent<IRevenueBulletChartProps> = ({
  data,
  fullSize,
}) => {
  return (
    <Box height="300px" width={fullSize ? "100%" : "50%"}>
      <ResponsiveBullet
        data={data}
        margin={
          fullSize
            ? { top: 50, right: 140, bottom: 50, left: 140 }
            : { top: 20, right: 40, bottom: 20, left: 40 }
        }
        spacing={60}
        layout={fullSize ? "horizontal" : "vertical"}
        titleAlign="start"
        titleOffsetX={-60}
        measureSize={0.3}
      />
    </Box>
  );
};

export default RevenueBulletChart;
