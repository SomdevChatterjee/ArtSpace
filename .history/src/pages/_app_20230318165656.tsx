import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../charka/theme';
import Layout from '../components/Layouts/Layout';
import { RecoilRoot } from 'recoil';
export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<div>
			<ChakraProvider theme={theme}>
				<Layout children={<Component {...pageProps} />}></Layout>
			</ChakraProvider>
			</div>
		</RecoilRoot>
	);
}
