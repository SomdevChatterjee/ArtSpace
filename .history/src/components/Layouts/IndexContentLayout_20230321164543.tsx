import { Flex } from '@chakra-ui/react';
import React from 'react';

type IndexContentLayoutProps = {};

const IndexContentLayout: React.FC<IndexContentLayoutProps> = ({ children }: any) => {
	console.log(children);
	return (
		<>
			<Flex justify={'center'} p={'16px 8px'} border={'1px solid red'}>
				<Flex
					width="95%"
					justify={'center'}
					maxW={'850px'}
					direction={"row"}
				>
					{/* LHS */}
					<Flex
						direction={'column'}
						width={{ base: '100%', md: '65%' }}
						mr={{ base: 0, md: 6 }}
					>
						{children && children[0 as keyof typeof children]}
					</Flex>
					{/* RHS */}
					<Flex
						direction={'column'}
						display={{ base: 'none', md: 'flex' }}
						flexGrow={1}
						width = {""}
					>
						{children && children[1 as keyof typeof children]}
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
export default IndexContentLayout;
