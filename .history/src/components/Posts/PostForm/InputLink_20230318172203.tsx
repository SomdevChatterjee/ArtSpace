import { Flex, Stack, Button, Input, Image } from '@chakra-ui/react';
import React from 'react';

type InputLinkProps = {
    
};

const InputLink:React.FC<InputLinkProps> = () => {
    
    return (
		<Flex
			justify="center"
			padding={4}
			align={'center'}
			width="100%"
			direction={'column'}
		>
			
				<Flex
					justify={'center'}
					align="center"
					p={20}
					border="1px dashed"
					borderColor={'gray.200'}
					borderRadius={4}
					width="100%"
				>
					<Button
						variant={'outline'}
						height="28px"
						padding={4}
						onClick={() => selectedFileRef.current?.click()}
					>
						Upload
						<Input
							ref={()}
							type="file"
							hidden
							onChange={()=>{}}
						/>
					</Button>
				</Flex>
		</Flex>
	);
}
export default InputLink;