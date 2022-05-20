import * as React from "react";
import { cashData, cashFields } from "../../utils/constants";
import CashBarChart from "../financial-components/CashBarChart";
import CustomTile from "../ui-components/CustomTileWithChart";

interface ICashProps {}

const Cash: React.FunctionComponent<ICashProps> = (props) => {
  return (
    <CustomTile
      title="Cash & A/R"
      fields={cashFields}
      chart={<CashBarChart data={cashData} />}
      fullSizeChart={<CashBarChart data={cashData} fullSize />}
      status="red"
    />
  );
};

export default Cash;
