// 1. Import `extendTheme`
import "@fontsource/montserrat";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#0a050f",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.100",
      },
    }),
  },
  conponents:{
    // Button
  }
});
