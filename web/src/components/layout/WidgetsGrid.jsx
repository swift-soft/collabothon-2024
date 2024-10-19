import { Flex, VStack } from "@chakra-ui/react";
import BenchmarkWidget from "../widgets/BenchmarkWidget";
import GoalWidget from "../widgets/GoalWidget";
import TopWidgets from "../widgets/TopWidgets";
import ESGWidgets from "../widgets/ESGWidgets";
import ToDoList from "../widgets/ToDoList";
import Emissions from "../widgets/Emissions";

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
        <ToDoList />
        <Emissions />
      </Flex>
    </VStack>
  );
}
