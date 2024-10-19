import { Box, GridItem, GridItemProps } from "@chakra-ui/react";
import React from "react";

export default function Widget({ children, variant, ...rest }) {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.8)"
      rounded="lg"
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.2)"
      p={0.5}
      _hover={{ boxShadow: "0 0 0 2px rgba(255, 200, 3, 0.6)" }}
      {...rest}
    >
      {children}
    </Box>
  );
}
