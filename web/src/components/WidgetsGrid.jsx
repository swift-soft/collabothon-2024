import { Grid } from "@chakra-ui/react";
import TopWidgets from "./TopWidgets";
import ESGWidgets from "./ESGWidgets";
import Notifications from "./Notifications";
import Emissions from "./Emissions";

export default function WidgetsGrid() {
  return (
    <Grid
      w="100%"
      minH="100vh"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
    >
      <TopWidgets />
      <ESGWidgets />
      <Notifications />
      <Emissions />
    </Grid>
  );
}
