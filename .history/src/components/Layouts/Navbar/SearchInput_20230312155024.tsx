import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React from 'react';

type SearchInputProps = {
	user:User| any;
};

const SearchInput: React.FC<SearchInputProps> = () => {
	return (
		<Flex mr={2} align={'center'} grow={1}>
			<InputGroup>
				<InputLeftElement pointerEvents="none" mb={1}>
					<SearchIcon color="gray.300" />
				</InputLeftElement>
				<Input
					placeholder="Search Art"
					fontSize={'10px'}
					_placeholder={{ color: 'grey.500' }}
					_hover={{
						bg: 'white',
						border: '1px solid',
						borderColor: 'yellow.500',
					}}
					_focus={{
						outline: 'none',
						border: '1px solid',
						borderColor: 'yellow.700',
					}}
					height={'34px'}
					bg={'gray.50'}
				/>
			</InputGroup>
		</Flex>
	);
};
export default SearchInput;
