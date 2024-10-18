import {
  Stack,
  Heading,
  Flex,
  Text,
  Avatar,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { IconPhoneCall, IconUserQuestion } from "@tabler/icons-react";

const consultants = [
  {
    avatar: "/imgs/consultant-1.jpg",
    name: "Wojciech Mokwiński",
  },
  {
    avatar: "/imgs/consultant-2.jpg",
    name: "Stanisław Marciniak",
  },
];

export default function ConsultantsWidget() {
  return (
    <Stack alignItems="left" spacing={2} h="100%" p={4}>
      <Flex gap={4} align="center">
        <IconUserQuestion size={36} />
        <Flex flexDirection="column">
          <Heading fontSize="lg">We are here to help!</Heading>
          <Text>Video call one of our consultants</Text>
        </Flex>
      </Flex>
      {consultants.map((c, i) => (
        <Flex
          key={i}
          alignItems="center"
          gap={2}
          boxShadow="md"
          rounded="lg"
          p={2}
          pr={4}
          cursor="pointer"
          transition="all 250ms ease"
          bg="whiteAlpha.600"
          _hover={{ bg: "whiteAlpha.900" }}
        >
          <Avatar src={c.avatar} />
          <Stack spacing={0}>
            <Text fontWeight={600}>{c.name}</Text>
            <Flex align="center" gap={1}>
              <Box boxSize={2} bg="green.400" rounded="full" />
              <Text fontSize="sm">Available</Text>
            </Flex>
          </Stack>
          <Spacer />
          <IconPhoneCall color="#002E3C" />
        </Flex>
      ))}
    </Stack>
  );
}
