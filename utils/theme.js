import { extendTheme } from "@chakra-ui/react";

const spacer = 16;

export const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: false },
  colors: {
    black: "#000000",
    gray: {
      // 50: "#f9fafa",
      100: "#1A1A1A", // background
      // 200: "#e6e7e9",
      // 300: "#d2d4d7",
      // 400: "#a9adb2",
      // 500: "#1A1A1A",
      // 600: "#4d5560",
      // 700: "#2e3744",
      // 800: "#19202b",
      900: "#0D0D0D" // header
    },
    primary: {
      // 50: "#f9f6fd",
      // 100: "#e7dbf9",
      // 200: "#d2bcf3",
      // 300: "#b896ec",
      // 400: "#a980e9",
      500: "#1E6F9F" // button
      // 600: "#8145de",
      // 700: "#6926d0",
      // 800: "#5921b1",
      // 900: "#411881"
    }
  },
  styles: {
    global: () => ({
      "html, body": {
        bg: "gray.100"
        // color: "gray.800"
      }
    })
  },
  sizes: { container: { md: "736px" } },
  // spacings: {
  //   xs: spacer * 0.25, // 4
  //   sm: spacer * 0.5, // 8
  //   md: spacer, // 16
  //   lg: spacer * 1.5, // 24
  //   xl: spacer * 2, // 32
  //   "2xl": spacer * 2.5, // 40
  //   "3xl": spacer * 4 // 64
  // },
  radius: {
    sm: spacer * 0.25, // 4
    md: spacer * 0.5, // 8
    lg: spacer * 0.75, // 12
    xl: spacer * 1.5, // 24
    full: 99999
  }
});
