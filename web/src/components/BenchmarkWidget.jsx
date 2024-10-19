import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import Widget from "./Widget";
import { IconArrowUp } from "@tabler/icons-react";

export default function BenchmarkWidget() {
  return (
    <Widget>
      <Center flex={1} p={4} h="full">
        <Stack
          align="center"
          h="full"
          justifyContent="space-between"
          spacing={0}
        >
          <Text fontSize="xl">
            Your <span style={{ fontWeight: 600 }}>ESG</span> score is in the
            top
          </Text>
          <Flex align="center">
            <IconArrowUp size="40px" color="#4BD4B6" />
            <Text fontWeight={600} fontSize="6xl" lineHeight="58px">
              6<span style={{ fontSize: "40px" }}>%</span>
            </Text>
          </Flex>
          <Text fontSize="xl">of comapnies in your sector</Text>
        </Stack>
      </Center>
    </Widget>
  );
}
