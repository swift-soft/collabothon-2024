import Widget from "./Widget";
import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function GoalWidget() {
  return (
    <Widget flex={5}>
      <Stack px={4} py={2}>
        <Heading fontSize="xl" textAlign="center" mb={3}>
          Your ESG Goals
        </Heading>
        <ProgressBar
          title="Environmental"
          color="#4BD4B6"
          current={92}
          target={80}
        />
        <ProgressBar title="Social" color="#FFB300" current={90} target={95} />
        <ProgressBar
          title="Governance"
          color="#03485D"
          current={72}
          target={82}
        />
      </Stack>
    </Widget>
  );
}

function ProgressBar({ title, color, current, target }) {
  return (
    <Flex align="flex-start" gap={4}>
      <Text lineHeight="14px" w="120px">
        {title}
      </Text>
      <Flex flexDirection="column" w="100%">
        <Center w="full" position="relative" h="10px">
          <Box
            rounded="full"
            h="10px"
            w="full"
            bg="gray.200"
            position="absolute"
            left={0}
          />
          <Box
            h="10px"
            left={0}
            rounded="full"
            bg={color}
            opacity="0.4"
            position="absolute"
            w={`${target}%`}
          />
          <Box
            left="0"
            rounded="full"
            h="10px"
            w={`${current}%`}
            bg={color}
            position="absolute"
          />
        </Center>
        <Flex
          align="flex-end"
          w="full"
          position="relative"
          h="18px"
          color="blackAlpha.600"
        >
          <Text position="absolute" left="0" lineHeight="14px">
            0
          </Text>

          <Text
            position="absolute"
            left={`${current}%`}
            lineHeight="14px"
            transform="translateX(-50%)"
          >
            {current}
          </Text>

          <Text
            position="absolute"
            left={`${target}%`}
            lineHeight="14px"
            transform="translateX(-50%)"
          >
            {target}
          </Text>

          <Text position="absolute" right="0" lineHeight="14px">
            100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
