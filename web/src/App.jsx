import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import WidgetsGrid from "./components/WidgetsGrid";
import { IconLayoutDashboard } from "@tabler/icons-react";
import Footer from "./components/Footer";

function App() {
  return (
    <Box fontFamily='"Gotham", sans-serif' bg="gray.200" color="brand.navy.500">
      <Navbar />
      <Container maxW="container.xl" py={4}>
        <Flex alignItems="center" justifyContent="space-between" mb={6}>
          <Heading>Hello, Jimmy!</Heading>
          <Button
            rounded="full"
            colorScheme="gray"
            color="black"
            fontWeight={400}
            rightIcon={<IconLayoutDashboard />}
          >
            Customize
          </Button>
        </Flex>
        <WidgetsGrid />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
