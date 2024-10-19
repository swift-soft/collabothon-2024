import { Flex } from "@chakra-ui/react";
import ESGCalculator from "./ESGCalculator";
import ESGScoreWidget from "./ESGScoreWidget";
import Widget from "./Widget";

export default function ESGWidgets() {
  return (
    <Flex gap={4} w="full">
      <Widget colSpan={3} rowSpan={3} flex={1}>
        <ESGScoreWidget />
        {/* <WidgetBarChart /> */}
      </Widget>
      <Widget colSpan={3} rowSpan={3} flex={1} bg="gray.100">
        <ESGCalculator />
        {/* <WidgetPieChart /> */}
      </Widget>
    </Flex>
  );
}
