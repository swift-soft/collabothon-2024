import { Stack, Heading, Button, Spacer, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function InfoWidget({ title, link, icon }) {
  return (
    <Stack alignItems="left" spacing={4} h="100%" p={4}>
      <Flex align="center" gap={4}>
        {icon}
        <Heading fontSize="xl">{title}</Heading>
      </Flex>
      <Spacer />
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
