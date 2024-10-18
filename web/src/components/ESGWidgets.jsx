import ESGCalculator from "./ESGCalculator";
import ESGScoreWidget from "./ESGScoreWidget";
import Widget from "./Widget";

export default function ESGWidgets() {
  return (
    <>
      <Widget colSpan={3} rowSpan={2}>
        <ESGScoreWidget />
        {/* <WidgetBarChart /> */}
      </Widget>
      <Widget colSpan={3} rowSpan={2}>
        <ESGCalculator />
        {/* <WidgetPieChart /> */}
      </Widget>
    </>
  );
}
