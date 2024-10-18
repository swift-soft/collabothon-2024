import { Grid } from "@chakra-ui/react";
import Widget from "./Widget";

export default function WidgetsGrid() {
  return (
    <Grid
      w="100%"
      minH="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <Widget rowSpan={2} colSpan={1} />
      <Widget colSpan={2} />
      <Widget colSpan={2} />
      <Widget colSpan={4} />
    </Grid>
  );
}
