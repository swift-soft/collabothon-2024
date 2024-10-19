import {
  IconAlertCircle,
  IconMessage,
  IconUserExclamation,
} from "@tabler/icons-react";
import Widget from "./Widget";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const notifications = [
  {
    icon: <IconUserExclamation />,
    title: "Reduce CO₂ Emissions by 10%",
    description:
      "Implement carbon offset programs and switch to renewable energy sources to reduce overall emissions in the next quarter.",
  },
  {
    icon: <IconMessage />,
    title: "Upgrade to Energy-Efficient Systems",
    description:
      "Replace outdated equipment with energy-efficient alternatives, install smart meters, and utilize LED lighting in all facilities within six months.",
  },
  {
    icon: <IconUserExclamation />,
    title: "Implement Water Recycling",
    description:
      "Install water recycling systems in manufacturing plants to decrease water consumption by 20% over the next year.",
  },
  {
    icon: <IconMessage />,
    title: "Launch Diversity & Inclusion Program",
    description:
      "Introduce mandatory diversity training and ensure gender and racial representation in leadership roles within the company by the end of the year.",
  },
  {
    icon: <IconAlertCircle />,
    title: "Increase Governance Transparency",
    description:
      "Publish quarterly governance reports, including executive pay disclosures and decision-making processes, on the corporate website starting next quarter.",
  },
  {
    icon: <IconAlertCircle />,
    title: "Establish Anti-Corruption Training",
    description:
      "Develop and implement an anti-corruption and ethics training program for all employees, with a focus on procurement and financial practices, by Q1 2025.",
  },
];

// Function to truncate long descriptions
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export default function Notifications() {
  return (
    <Widget rowSpan={4} colSpan={2} flex={1}>
      <Stack p={2}>
        <Heading fontSize="xl">How to increase ESG score?</Heading>
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
              bg="gray.50"
              _hover={{ bg: "gray.100" }}
              _active={{ bg: "gray.200" }}
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
                <Text fontWeight="bold">{n.title}</Text>
                <Text>
                  {truncateText(n.description, 40)}
                  {/* Show up to 30 characters */}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Widget>
  );
}
