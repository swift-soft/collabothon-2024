import {
  Stack,
  Heading,
  Button,
  Spacer,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function InfoWidget({ title, link, icon, items }) {
  return (
    <Stack alignItems="left" spacing={4} h="100%" p={4}>
      <Flex align="center" gap={4}>
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
            bg="whiteAlpha.600"
            _hover={{ bg: "whiteAlpha.900" }}
          >
            <Box
              rounded="full"
              border="1px solid"
              borderColor="brand.navy.500"
              aspectRatio={1}
              p={2}
            >
              {item.icon}
            </Box>
            <Stack spacing={0}>
              <Text>{item.text}</Text>
              <Text>{item.date}</Text>
            </Stack>
          </Flex>
        ))}
      </Stack>

      <Button
        variant="link"
        width="max-content"
        rightIcon={<ArrowForwardIcon />}
      >
        {link}
      </Button>
    </Stack>
  );
}
