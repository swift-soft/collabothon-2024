import { Flex, Grid, VStack } from "@chakra-ui/react";
import TopWidgets from "./TopWidgets";
import ESGWidgets from "./ESGWidgets";
import Notifications from "./Notifications";
import Emissions from "./Emissions";

export default function WidgetsGrid() {
  return (
    <VStack w="full" minH="100vh" gap={4}>
      <TopWidgets />
      <ESGWidgets />
      <Flex gap={4} w="full">
        <Notifications />
        <Emissions />
      </Flex>
    </VStack>
  );
}
