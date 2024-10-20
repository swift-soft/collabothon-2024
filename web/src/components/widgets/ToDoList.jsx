import {
  IconAlertCircle,
  IconMessage,
  IconUserExclamation,
} from "@tabler/icons-react";
import Widget from "./Widget";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchToDoListByCompany } from "../../config/supabaseClient";
import { getUser } from "../../config/supabaseClient";

// Mapping of titles to icons
const iconMap = {
  "Reduce CO₂ Emissions by 10%": <IconUserExclamation />,
  "Upgrade to Energy-Efficient Systems": <IconMessage />,
  "Implement Water Recycling": <IconUserExclamation />,
  "Launch Diversity & Inclusion Program": <IconMessage />,
  "Increase Governance Transparency": <IconAlertCircle />,
  "Establish Anti-Corruption Training": <IconAlertCircle />,
};

// Function to truncate long descriptions
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToDoList = async () => {
      const currentUser = await getUser();
      if (currentUser) {
        const { company } = currentUser;
        const todos = await fetchToDoListByCompany(company);

        setToDoList(todos);
      }
      setLoading(false);
    };

    loadToDoList();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Widget rowSpan={4} colSpan={2} flex={1}>
      <Stack p={2}>
        <Heading fontSize="xl">How to increase ESG score?</Heading>
        <Stack>
          {toDoList.map((n, i) => (
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
                {/* Dynamically map the icon based on the title */}
                {iconMap[n.title] || <IconMessage />}
              </Box>
              <Stack spacing={0}>
                <Text fontWeight="bold">{n.title}</Text>
                <Text>
                  {truncateText(n.description, 40)}
                  {/* Show up to 40 characters */}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Widget>
  );
}
