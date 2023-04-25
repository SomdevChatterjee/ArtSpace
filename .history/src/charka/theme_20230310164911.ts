// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#ECC94B'
  },
  fonts:{
    body:"montseratt, san-serif"
  },
  styles:{
    globals:{} =>{}
  }
}

export const theme = extendTheme({ colors })
