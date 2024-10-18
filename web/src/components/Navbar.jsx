import { Box, Container, Img, Flex, Text, Button } from "@chakra-ui/react";

const links = [
  "Accounts & Cash Management",
  "Financing & Foreign Trade",
  "Investment & Risk Management",
  "Insights & Research",
  "Help & Contact",
];

export default function Navbar() {
  return (
    <Box bg="brand.navy.500" py={4}>
      <Container maxW="container.xl">
        <Flex gap={4} align="center">
          <Img src="/imgs/logo.svg" />
          {links.map((l) => (
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
          <Button variant="ghost" color="white" colorScheme="whiteAlpha">
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
