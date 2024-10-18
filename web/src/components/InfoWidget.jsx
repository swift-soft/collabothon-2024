import { Stack, Heading, Button, Spacer } from "@chakra-ui/react";
import { IconMail } from "@tabler/icons-react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function InfoWidget() {
  return (
    <Stack alignItems="left" spacing={4} h="100%" p={4}>
      <IconMail size={48} />
      <Heading fontSize="2xl">10 Messages</Heading>
      <Spacer />
      <Button
        variant="link"
        width="max-content"
        rightIcon={<ArrowForwardIcon />}
      >
        Open mailbox
      </Button>
    </Stack>
  );
}
