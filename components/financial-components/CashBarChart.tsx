import { Box } from "@chakra-ui/layout";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import * as React from "react";

interface ICashBarChartProps {
  data: BarDatum[];
  fullSize?: boolean;
}

const CashBarChart: React.FunctionComponent<ICashBarChartProps> = ({
  data,
  fullSize,
}) => {
  return (
    <Box height="100%" width="100%">
      <ResponsiveBar
        data={data}
        margin={{ top: 20, right: 40, bottom: fullSize ? 100 : 40, left: 100 }}
        indexBy="dateRange"
        keys={["Cash Revenue"]}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "Cash Revenue",
            },
            id: "lines",
          },
        ]}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date Range",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Cash Revenue",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      />
    </Box>
  );
};

export default CashBarChart;
