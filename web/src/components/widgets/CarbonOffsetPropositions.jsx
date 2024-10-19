import { Flex, Heading, Img, Link, Stack, Text } from "@chakra-ui/react";

const propositions = [
  {
    img: "/imgs/carbon-offset-1.webp",
    text: "Conserving Coastal Forestland",
    price: "$18",
    link: "https://shop.climeco.com/product/conserving-coastal-forestland-and-first-nations/",
  },
  {
    img: "/imgs/carbon-offset-2.jpg",
    text: "South Dakota wind turbines",
    price: "$12.50",
    link: "https://shop.climeco.com/product/educating-the-next-energy-generation-workforce/",
  },
];

export default function CarbonOffsetPropositions() {
  return (
    <Stack>
      <Heading fontSize="md">
        Neutralize your carbon footprint by purchasing carbon credits
      </Heading>
      <Stack>
        {propositions.map((p, i) => (
          <Flex
            key={i}
            alignItems="center"
            gap={4}
            p={2}
            rounded="lg"
            boxShadow="md"
            cursor="pointer"
            transition="all 250ms ease"
            as={Link}
            href={p.link}
            target="_blank"
            bg="gray.50"
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.200" }}
          >
            <Img
              src={p.img}
              h="78px"
              w="148px"
              rounded="md"
              objectFit="cover"
            />
            <Stack spacing={1}>
              <Text fontWeight="600" fontSize="lg">
                {p.text}
              </Text>
              <Text>{p.price} / credit</Text>
            </Stack>
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
}
