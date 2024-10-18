import ESGScoreWidget from "./ESGScoreWidget";
import Widget from "./Widget";
import WidgetPieChart from "./charts/PieCharts";

export default function ESGWidgets() {
  return (
    <>
      <Widget colSpan={3}>
        <ESGScoreWidget />
        {/* <WidgetBarChart /> */}
      </Widget>
      <Widget colSpan={3}>
        <WidgetPieChart />
      </Widget>
    </>
  );
}
