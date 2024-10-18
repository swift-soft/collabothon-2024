import { Box, GridItem, GridItemProps } from "@chakra-ui/react";
import React from "react";

export default function Widget({ children, variant, ...rest }) {
  return (
    <Box
      bg="rgba(0, 46, 60, 0.2)"
      rounded="lg"
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.2)"
      p={0.5}
      {...rest}
    >
      <Box
        bg="rgba(255, 255, 255, 0.6)"
        rounded="lg"
        w="full"
        h="full"
        overflow="hidden"
      >
        {children}
      </Box>
    </Box>
  );
}
