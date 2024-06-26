import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreateCommunityModal from '../../../Modal/Auth/CreateCommunities/CreateCommunityModal';
import { GrAdd } from 'react-icons/gr';
type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
    const [open, setOpen] = useState(false)
	return (
		<>
			<CreateCommunityModal open = {open} handleClose={()=>}/>
			<MenuItem
				width={'100%'}
				fontSize={'10pt'}
				_hover={{ bg: 'gray' }}
				onClick={() => {}}
			>
				<Flex align={'center'}>
					<Icon as={GrAdd} fontSize={'16'} mr={2} />
					Create Community
				</Flex>
			</MenuItem>
		</>
	);
};
export default Communities;
