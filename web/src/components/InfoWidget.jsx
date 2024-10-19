import {
  Stack,
  Heading,
  Button,
  Spacer,
  Flex,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function InfoWidget({ title, link, icon, items }) {
  return (
    <Stack
      alignItems="left"
      spacing={4}
      h="100%"
      p={4}
      justifyContent="space-between"
    >
      <Flex align="center" gap={4} h="46px">
        {icon}
        <Heading fontSize="xl">{title}</Heading>
      </Flex>
      <Stack spacing={2}>
        {items?.map((item, i) => (
          <Flex
            key={i}
            alignItems="center"
            gap={2}
            boxShadow="md"
            rounded="lg"
            p={2}
            cursor="pointer"
            transition="all 250ms ease"
            bg="gray.50"
            _hover={{
              bg: "gray.100",
            }}
            _active={{ bg: "gray.200" }}
          >
            <Center
              rounded="full"
              border="1px solid"
              borderColor="brand.navy.500"
              aspectRatio={1}
              boxSize="48px"
            >
              {item.icon}
            </Center>
            <Stack spacing={0}>
              <Text fontWeight={600}>{item.text}</Text>
              <Text fontSize="14px">{item.date}</Text>
            </Stack>
          </Flex>
        ))}
      </Stack>

      <Button
        variant="link"
        width="max-content"
        rightIcon={<ArrowForwardIcon />}
        _hover={{
          color: "brand.yellow.500",
        }}
      >
        {link}
      </Button>
    </Stack>
  );
}
