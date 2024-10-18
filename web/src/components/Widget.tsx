import { GridItem, GridItemProps } from "@chakra-ui/react";
import React from "react";

type Props = GridItemProps;

export default function Widget({ children, ...rest }: Props) {
  return (
    <GridItem bg="rgba(0, 46, 60, 0.5)" rounded="lg" boxShadow="md" {...rest}>
      {children}
    </GridItem>
  );
}
