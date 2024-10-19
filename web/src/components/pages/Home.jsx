import { useEffect, useState } from "react";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { IconLayoutDashboard } from "@tabler/icons-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import WidgetGrid from "../layout/WidgetsGrid";
import { getUser } from "../../config/supabaseClient";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      if (currentUser) {
        const firstName = currentUser.full_name.split(" ")[0];
        setUser({ ...currentUser, first_name: firstName });
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box fontFamily='"Gotham", sans-serif' bg="gray.200" color="brand.navy.500">
      <Navbar />
      <Container maxW="container.xl" py={4}>
        <Flex alignItems="center" justifyContent="space-between" mb={6}>
          <Heading>Hello, {user.first_name}!</Heading>
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
