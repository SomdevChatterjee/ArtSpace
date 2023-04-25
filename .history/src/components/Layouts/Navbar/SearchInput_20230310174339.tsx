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
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
    >children='$'</InputLeftElement>
    <Input placeholder='Enter amount' />
    <InputRightElement>{<CheckIcon color='green.500' />}</InputRightElement>
  </InputGroup>
        </Flex>
    );
};
export default SearchInput;