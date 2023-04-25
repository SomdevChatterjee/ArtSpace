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
                <Flex>{children&& children[0]}</Flex>
                {/* RHS */}
                <Flex>{children children[1]}</Flex>
            </Flex>
        </Flex>
        </>
    );
}
export default PageContent;