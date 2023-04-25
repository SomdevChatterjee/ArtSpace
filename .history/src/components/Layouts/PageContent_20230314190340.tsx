import { Flex } from '@chakra-ui/react';
import React from 'react';

type PageContentProps = {};

const PageContent: React.FC<PageContentProps> = ({ children }: any) => {
	console.log(children);
	return (
		<>
			<Flex justify={'center'} p={'16px 8px'} border={'1px solid red'}>
				<Flex
					border={'1px solid green'}
					width="95%"
					justify={'center'}
					maxW={'850px'}
				>
					{/* LHS */}
					<Flex
						border={'1px solid blue'}
						direction={'column'}
						width={{ base: '100%', md: '65%' }}
						mr={{ base: 0, md: 6 }}
					>
						{children && children[0 as keyof typeof children]}
					</Flex >
					{/* RHS */}
					<Flex border={'1px solid orange'} direction={"column"} display={{base:"none", md:"flex"}}
                    flex>
						{children && children[1 as keyof typeof children]}
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
export default PageContent;
