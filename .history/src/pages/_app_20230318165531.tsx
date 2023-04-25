import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../charka/theme';
import Layout from '../components/Layouts/Layout';
import { RecoilRoot } from 'recoil';
export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<div children>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
			</div>
		</RecoilRoot>
	);
}
