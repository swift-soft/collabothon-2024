import { Grid } from "@chakra-ui/react";
import Widget from "./Widget";
import WidgetBarChart from "./charts/BarChart";
import WidgetPieChart from "./charts/PieCharts";
import WidgetStackedAreaChart from "./charts/StackedAreaChart";

export default function WidgetsGrid() {
  return (
    <Grid
      w="100%"
      minH="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <Widget colSpan={3}>
        <WidgetBarChart />
        {/* <WidgetBarChart /> */}
      </Widget>
      <Widget colSpan={2}>
        <WidgetPieChart />
      </Widget>
      <Widget colSpan={5}>
        <WidgetStackedAreaChart />
      </Widget>
    </Grid>
  );
}
