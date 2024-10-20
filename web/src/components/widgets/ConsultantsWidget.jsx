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
import { useEffect, useState } from "react";
import { getUser } from "../../config/supabaseClient";
import { fetchConsultantsForCompany } from "../../config/supabaseClient";

export default function ConsultantsWidget() {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConsultants = async () => {
      const currentUser = await getUser();
      if (currentUser) {
        const { company } = currentUser;
        const fetchedConsultants = await fetchConsultantsForCompany(company);

        setConsultants(fetchedConsultants);
      }
      setLoading(false);
    };

    loadConsultants();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

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
            <Avatar src={c.avatar_url} />
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
