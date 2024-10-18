import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import WidgetsGrid from "./components/WidgetsGrid";
import { IconLayoutDashboard } from "@tabler/icons-react";

function App() {
  return (
    <Box fontFamily='"Gotham", sans-serif'>
      <Navbar />
      <Container maxW="container.xl" py={4}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading mb={4}>Hello, Jimmy!</Heading>
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
    </Box>
  );
}

export default App;
