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
import { useCommunityData } from '../../../hooks/useCommunityData';
import { useRouter } from 'next/router';
import useDirectory from '../../../hooks/useDirectory';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
type IconsProps = {};

const Icons: React.FC<IconsProps> = () => {
	const [user] = useAuthState(auth)
	const router = useRouter();
	const {toggleMenuOpen} = useDirectory()
	const handleClick = () =>{
		const {communityId } = router.query;
		if(communityId){
			router.push(`/A/${communityId}/Submit`)
			return;
		}
		toggleMenuOpen();


	} 
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
					onClick={()=>{
						if(user){
							router.push(`/`)
						}
					}}
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
				<Flex
					fontSize={'15pt'}
					mr={'1.5'}
					ml={'1.5'}
					padding={1}
					cursor={'pointer'}
                    display={{base:"none", md:"flex"}}
					_hover={{ bg: 'gray.200' }}
				>
					<Icon color={'yellow.500'} as={GrAdd} onClick={handleClick}/>
				</Flex>
			</>
		</Flex>
	);
};
export default Icons;
