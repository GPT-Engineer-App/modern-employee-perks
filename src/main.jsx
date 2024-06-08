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
    500: "#ff9900",
    400: "#ffb84d",
  },
  dark: {
    900: "#232f3e",
    800: "#37475a",
    700: "#485769",
  },
};

const fonts = {
  heading: "Amazon Ember, Arial, sans-serif",
  body: "Amazon Ember, Verdana, sans-serif",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
