import { Flex } from '@chakra-ui/react';
import React from 'react';

type PageContentProps = {
    
};

const PageContent:React.FC<PageContentProps> = ({children}:any) => {
    console.log(children)
    return (
        <>
        <Flex border={"1px solid red"}>

            <Flex border={"1px solid green"}>
                {/* LHS */}
                <Flex border={"1px solid bluue"}>{children&& children[0 as keyof typeof children]}</Flex>
                {/* RHS */}
                <Flex>{children && children[1 as keyof typeof children]}</Flex>
            </Flex>
        </Flex>
        </>
    );
}
export default PageContent;