import { Box, Container, Img, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="brand.navy.500" mt="128px">
      <Container
        maxW="container.xl"
        h="148px"
        py="32px"
        color="white"
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Text fontWeight={600} opacity={0.9}>
          Cookies policy
        </Text>
        <Img src="/imgs/logo-footer.svg" opacity={0.9} />
        <Text fontWeight={600} opacity={0.9}>
          The bank at your side
        </Text>
      </Container>
    </Box>
  );
}
