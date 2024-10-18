import { Box, Text } from "@chakra-ui/react";
import ESGPieChart from "./charts/ESGPieCharts";

export default function ESGScoreWidget() {
  return (
    <Box w="full" h="full" position="relative">
      <ESGPieChart />
    </Box>
  );
}
