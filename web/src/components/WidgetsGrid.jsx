import { Box, Flex, VStack } from "@chakra-ui/react";
import TopWidgets from "./TopWidgets";
import ESGWidgets from "./ESGWidgets";
import Notifications from "./Notifications";
import Emissions from "./Emissions";
import BenchmarkWidget from "./BenchmarkWidget";
import GoalWidget from "./GoalWidget";

export default function WidgetsGrid() {
  return (
    <VStack w="full" minH="100vh" gap={4}>
      <TopWidgets />
      <ESGWidgets />
      <Flex gap={4} w="full">
        <BenchmarkWidget />
        <GoalWidget />
      </Flex>
      <Flex gap={4} w="full">
        <Notifications />
        <Emissions />
      </Flex>
    </VStack>
  );
}
