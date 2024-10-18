import ESGCalculator from "./ESGCalculator";
import ESGScoreWidget from "./ESGScoreWidget";
import Widget from "./Widget";
import WidgetPieChart from "./charts/PieCharts";

export default function ESGWidgets() {
  return (
    <>
      <Widget colSpan={3} rowSpan={3}>
        <ESGScoreWidget />
        {/* <WidgetBarChart /> */}
      </Widget>
      <Widget colSpan={3} rowSpan={3}>
        <ESGCalculator />
        {/* <WidgetPieChart /> */}
      </Widget>
    </>
  );
}
