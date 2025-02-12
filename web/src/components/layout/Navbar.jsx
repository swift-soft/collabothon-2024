import {
  Box,
  Container,
  Img,
  Flex,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const linksDown = [
  "Accounts & Cash Management",
  "Financing & Foreign Trade",
  "Investment",
  "Insights & Research",
  "Help & Contact",
];

const linksUp = [
  "Private Clients",
  "Business Clients",
  "Wealth Management",
  "Corporate Clients",
  "Careers",
];

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Box bg="brand.navy.500" py={4}>
      <Container maxW="90%">
        <Flex justify="space-between">
          <Flex gap={16}>
            <Img src="/imgs/logo.svg" />
            <VStack gap={10}>
              <Flex gap={4} width="full">
                {linksUp.map((l) => (
                  <Text
                    key={l}
                    color="white"
                    opacity="0.9"
                    fontSize="18px"
                    cursor="pointer"
                    _hover={{ opacity: 1 }}
                  >
                    {l}
                  </Text>
                ))}
              </Flex>
              <Flex gap={4} align="center">
                {linksDown.map((l) => (
                  <Text
                    key={l}
                    color="white"
                    opacity="0.8"
                    fontSize="16px"
                    cursor="pointer"
                    _hover={{ opacity: 1 }}
                  >
                    {l}
                  </Text>
                ))}
              </Flex>
            </VStack>
          </Flex>
          <Button
            variant="ghost"
            color="white"
            colorScheme="whiteAlpha"
            onClick={handleLogout}
          >
            <Flex align="center" gap={2}>
              <Img src="/imgs/lock.svg" />
              Log out
            </Flex>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
