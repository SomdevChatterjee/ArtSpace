import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layouts/Layout";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout></Layout>
          <Component {...pageProps} />
        
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
