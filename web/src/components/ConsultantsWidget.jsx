import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Stack,
  Heading,
  Flex,
  Text,
  Avatar,
  Spacer,
  Box,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {
  IconMessage,
  IconPhoneCall,
  IconUserQuestion,
} from "@tabler/icons-react";

const consultants = [
  {
    avatar: "/imgs/avatar-bartek.jpg",
    name: "Bartek",
    available: true,
  },
  {
    avatar: "/imgs/consultant-1.jpg",
    name: "Susanne",
    available: false,
  },
];

export default function ConsultantsWidget() {
  return (
    <Stack
      alignItems="left"
      spacing={4}
      h="100%"
      p={4}
      justifyContent="space-between"
    >
      <Flex gap={4} align="center">
        <IconUserQuestion size={36} />
        <Flex flexDirection="column">
          <Heading fontSize="lg">We are here to help!</Heading>
          <Text>Video call or chat with one of our consultants</Text>
        </Flex>
      </Flex>
      <Stack spacing={2}>
        {consultants.map((c, i) => (
          <Flex
            key={i}
            alignItems="center"
            gap={2}
            boxShadow="md"
            rounded="lg"
            p={2}
            pr={4}
            transition="all 250ms ease"
            bg="gray.50"
          >
            <Avatar src={c.avatar} />
            <Stack spacing={0}>
              <Text fontWeight={600}>{c.name}</Text>
              <Flex align="center" gap={1}>
                <Box
                  boxSize={2}
                  bg={c.available ? "green.400" : "red.500"}
                  rounded="full"
                />
                <Text fontSize="sm">
                  {c.available ? "Available" : "Back in 15 minutes"}
                </Text>
              </Flex>
            </Stack>
            <Spacer />
            <Flex align="center" gap={2}>
              <IconButton
                aria-label="message"
                icon={<IconMessage color="#002E3C" />}
                rounded="full"
              />
              <IconButton
                aria-label="call"
                icon={<IconPhoneCall color="#002E3C" />}
                rounded="full"
              />
            </Flex>
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
        View all consultants
      </Button>
    </Stack>
  );
}
