import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    cyan: {
      500: "",
    },
    navy: {
      500: "#002E3C",
    },
    yellow: {
      400: "#FFD600",
      500: "#FFC703",
    },
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
