import { Box } from "@chakra-ui/react";
import { Datum, ResponsiveBullet } from "@nivo/bullet";
import * as React from "react";

interface IBudgetBulletChartProps {
  data: Datum[];
  fullSize?: boolean;
}

const BudgetBulletChart: React.FunctionComponent<IBudgetBulletChartProps> = ({
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

export default BudgetBulletChart;
