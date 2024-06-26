import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../charka/theme';
import Layout from '../components/Layouts/Layout';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    
    </ChakraProvider>
  )
  
}
