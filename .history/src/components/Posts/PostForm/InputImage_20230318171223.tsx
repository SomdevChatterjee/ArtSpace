import { Button, Flex, Input, Image } from '@chakra-ui/react';
import React, { useRef } from 'react';

type InputImageProps = {
	selectedFile?: string;
	onSelectedImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
	setSelectedTab: (value: string) => void;
	setSelectedFile: (value: string) => void;
};

const InputImage: React.FC<InputImageProps> = ({
	selectedFile,
	setSelectedFile,
	onSelectedImage,
	setSelectedTab,
}) => {
	const selectedFileRef = useRef<HTMLInputElement>(null);
	return (
		<Flex justify="center" padding={4} align={'center'} width="100%">
			{selectedFile ? (
				<>
                <Image src={selectedFile} alt="post"/>
                
                </>
			) : (
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
							ref={selectedFileRef}
							type="file"
							hidden
							onChange={onSelectedImage}
						/>
					</Button>
				</Flex>
			)}
		</Flex>
	);
};
export default InputImage;
