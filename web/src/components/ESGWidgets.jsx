import Widget from "./Widget";
import WidgetBarChart from "./charts/BarChart";
import WidgetPieChart from "./charts/PieCharts";

export default function ESGWidgets() {
  return (
    <>
      <Widget colSpan={3}>
        <WidgetBarChart />
        {/* <WidgetBarChart /> */}
      </Widget>
      <Widget colSpan={2}>
        <WidgetPieChart />
      </Widget>
    </>
  );
}
