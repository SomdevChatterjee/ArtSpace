import { Flex } from '@chakra-ui/react';
import React from 'react';

type PageContentProps = {
    
};

const PageContent:React.FC<PageContentProps> = ({children}:any) => {
    console.log(children)
    return (
        <>
        <Flex>

            <Flex>
                {/* LHS */}
                <Flex>{chi children[0]}</Flex>
                {/* RHS */}
                <Flex>{children[1]}</Flex>
            </Flex>
        </Flex>
        </>
    );
}
export default PageContent;