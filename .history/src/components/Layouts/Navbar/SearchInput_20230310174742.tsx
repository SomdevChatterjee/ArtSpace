import { PhoneIcon } from '@chakra-ui/icons';
import {
	Flex,
	Input,
	InputGroup,
	InputLeftElement
} from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {
	//user
};

const SearchInput: React.FC<SearchInputProps> = () => {
	return (
		<Flex>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					{<Seac color="gray.300" />}
				</InputLeftElement>
				<Input type="tel" placeholder="Phone number" />
			</InputGroup>
		</Flex>
	);
};
export default SearchInput;
