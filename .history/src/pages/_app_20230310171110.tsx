import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../charka/theme';
import Layouts from '../components/Layouts/Layouts';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layouts ch>
        <Component {...pageProps} />
      </Layouts>
    
    </ChakraProvider>
  )
  
}
