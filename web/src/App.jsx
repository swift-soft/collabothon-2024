import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import WidgetsGrid from "./components/WidgetsGrid";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function App() {
  return (
    <Box fontFamily='"Gotham", sans-serif'>
      <Navbar />
      <Container maxW="container.xl" py={4}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading mb={4}>Hello, Jimmy!</Heading>
          <Button
            rounded="full"
            colorScheme="brand.yellow"
            color="black"
            fontWeight={400}
            rightIcon={<ArrowForwardIcon />}
          >
            Help
          </Button>
        </Flex>
        <WidgetsGrid />
      </Container>
    </Box>
  );
}

export default App;
