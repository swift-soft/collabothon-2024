import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { IconLayoutDashboard } from "@tabler/icons-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import WidgetGrid from "../layout/WidgetsGrid";

function Home() {
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
        <WidgetGrid />
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
