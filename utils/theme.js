import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"]
});

export const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: false },
  colors: {
    black: "#000000",
    gray: {
      50: "#F2F2F2",
      100: "#1A1A1A", // background
      700: "#333333", // card border
      800: "#262626", // card background
      900: "#0D0D0D" // header
    },
    primary: {
      400: "#4EA8DE", // primary text
      500: "#1E6F9F" // button
    },
    secondary: {
      400: "#8284FA" // secondary text
    }
  },
  styles: {
    global: () => ({
      "html, body": {
        bg: "gray.100",
        color: "gray.50"
      }
    })
  },
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily
  },
  sizes: { container: { md: "736px" } }
});
