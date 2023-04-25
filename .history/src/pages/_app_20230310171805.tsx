import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../charka/theme';
import Layout from '../components/Layouts/Layout';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout 
      private _value : string;
      public get value() : string {
        return this._value;
      }
      public set value(v : string) {
        this._value = v;
      }
      >
        <Component {...pageProps} />
      </Layout>
    
    </ChakraProvider>
  )
  
}
