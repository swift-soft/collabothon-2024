import { Grid } from "@chakra-ui/react";
import Widget from "./Widget";
import WidgetStackedAreaChart from "./charts/StackedAreaChart";
import TopWidgets from "./TopWidgets";
import ESGWidgets from "./ESGWidgets";

export default function WidgetsGrid() {
  return (
    <Grid
      w="100%"
      minH="100vh"
      templateRows="repeat(7, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
    >
      <TopWidgets />
      <ESGWidgets />
      <Widget colSpan={5} rowSpan={3}>
        <WidgetStackedAreaChart />
      </Widget>
    </Grid>
  );
}
