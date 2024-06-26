import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../charka/theme';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
  )
  
}
