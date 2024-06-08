import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  accent: {
    500: "#ff4081",
    400: "#ff79b0",
  },
  dark: {
    900: "#121212",
    800: "#1e1e1e",
    700: "#2e2e2e",
  },
};

const fonts = {
  heading: "Arial, sans-serif",
  body: "Verdana, sans-serif",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
