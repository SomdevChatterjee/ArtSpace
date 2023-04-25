import React from 'react';
import { BsArrowRightCircle, BsChatDots } from 'react-icons/bs';
import {
	IoFilterCircleOutline,
	IoNotificationsCircleOutline,
	IoVideocamOutline,
} from 'react-icons/io5';
import { GrAdd } from 'react-icons/gr';
import { Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
type IconsProps = {};

const Icons: React.FC<IconsProps> = () => {
	const [commuinity]
	return (
		<Flex>
			<Flex
				display={{ base: 'none', md: 'flex' }}
				align="center"
				borderRight={'1px solid'}
				borderColor="yellow.500"
			>
				<Flex
					mr={'1.5'}
					ml={'1.5'}
					padding={1}
					cursor={'pointer'}
					_hover={{ bg: 'gray.200' }}
				>
					<Icon color={'yellow.500'} as={BsArrowRightCircle} />
				</Flex>
				<Flex
					fontSize={'15pt'}
					mr={'1.5'}
					ml={'1.5'}
					padding={1}
					cursor={'pointer'}
					_hover={{ bg: 'gray.200' }}
				>
					<Icon color={'yellow.500'} as={IoFilterCircleOutline} />
				</Flex>
				<Flex
					fontSize={'15pt'}
					mr={'1.5'}
					ml={'1.5'}
					padding={1}
					cursor={'pointer'}
					_hover={{ bg: 'gray.200' }}
				>
					<Icon color={'yellow.500'} as={IoVideocamOutline} />
				</Flex>
			</Flex>
			<>
				<Flex
					fontSize={'15pt'}
					mr={'1.5'}
					ml={'1.5'}
					padding={1}
					cursor={'pointer'}
					_hover={{ bg: 'gray.200' }}
				>
					<Icon color={'yellow.500'} as={IoNotificationsCircleOutline} />
				</Flex>
				<Flex
					fontSize={'15pt'}
					mr={'1.5'}
					ml={'1.5'}
					padding={1}
					cursor={'pointer'}
					_hover={{ bg: 'gray.200' }}
				>
					<Icon color={'yellow.500'} as={BsChatDots} />
				</Flex>
				<Link href={`/A//Submit`}>
				<Flex
					fontSize={'15pt'}
					mr={'1.5'}
					ml={'1.5'}
					padding={1}
					cursor={'pointer'}
                    display={{base:"none", md:"flex"}}
					_hover={{ bg: 'gray.200' }}
				>
					<Icon color={'yellow.500'} as={GrAdd} />
				</Flex>
				</Link>
			</>
		</Flex>
	);
};
export default Icons;
