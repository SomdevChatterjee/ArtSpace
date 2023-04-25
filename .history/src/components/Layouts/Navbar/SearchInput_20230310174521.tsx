import { PhoneIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {
    //user
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <Flex>
              <InputGroup>
    <InputLeftElement
      pointerEvents='none'>{<PhoneIcon color='gray.300' />}</InputLeftElement>
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'>$</InputLeftElement>
    <Input placeholder='Enter amount' />
    <InputRightElement>{<CheckIcon color='green.500' />}</InputRightElement>
  </InputGroup>
        </Flex>
    );
};
export default SearchInput;