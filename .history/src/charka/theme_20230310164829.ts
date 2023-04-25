// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/montserrat/300";
import "@fontsource/montserrat/400";
import "@fontsource/montserrat/700";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#ECC94B'
  },
  fonts:{
    body:"montseratt, san-serif"
  }
}

export const theme = extendTheme({ colors })
