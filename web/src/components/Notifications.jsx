import {
  IconAlertCircle,
  IconMessage,
  IconTransfer,
  IconUserExclamation,
} from "@tabler/icons-react";
import Widget from "./Widget";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const notifications = [
  {
    icon: <IconUserExclamation />,
    text: "Lorem ipsum dolor sit...",
    date: "2024-10-16",
  },
  {
    icon: <IconMessage />,
    text: "Lorem ipsum dolor sit...",
    date: "2024-10-16",
  },
  {
    icon: <IconTransfer />,
    text: "Lorem ipsum dolor sit...",
    date: "2024-10-16",
  },
  {
    icon: <IconMessage />,
    text: "Lorem ipsum dolor sit...",
    date: "2024-10-16",
  },
  {
    icon: <IconAlertCircle />,
    text: "Lorem ipsum dolor sit...",
    date: "2024-10-16",
  },
  {
    icon: <IconAlertCircle />,
    text: "Lorem ipsum dolor sit...",
    date: "2024-10-16",
  },
];

export default function Notifications() {
  return (
    <Widget rowSpan={2} colSpan={2}>
      <Stack p={2}>
        <Heading fontSize="xl">Notifications</Heading>
        <Stack>
          {notifications.map((n, i) => (
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
                {n.icon}
              </Box>
              <Stack spacing={0}>
                <Text elli>{n.text}</Text>
                <Text>{n.date}</Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Widget>
  );
}
