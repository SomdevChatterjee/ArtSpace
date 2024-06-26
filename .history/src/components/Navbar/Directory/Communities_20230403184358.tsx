import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';

import { GrAdd } from 'react-icons/gr';
import CreateCommunityModal from '../../Modal/Auth/CreateCommunities/CreateCommunityModal';
type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
    const [open, setOpen] = useState(false)
	const mySnippets = 
	return (
		<>
            <CreateCommunityModal open = {open} handleClose={()=>setOpen(false)}/>
			<MenuItem
				width={'100%'}
				fontSize={'10pt'}
				_hover={{ bg: 'gray' }}
				onClick={() => {setOpen(true)}}
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
