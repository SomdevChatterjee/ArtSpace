import { Button, Flex, Input, Image, Stack } from '@chakra-ui/react';
import React, { useRef } from 'react';

type InputImageProps = {
	selectedFile?: string;
	onSelectedImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
	setSelectedTab: (value: string) => void;
	setSelectedFile: (value: string) => void;
    textInputs: {
		title: string;
		body: string;
	};
	onChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
};

const InputImage: React.FC<InputImageProps> = ({
	selectedFile,
	setSelectedFile,
	onSelectedImage,
	setSelectedTab,
    textInputs,
	onChange,
}) => {
	const selectedFileRef = useRef<HTMLInputElement>(null);
	return (
		<Flex
			justify="center"
			padding={4}
			align={'center'}
			width="100%"
			direction={'column'}
		>
            	<Input
				name="title"
				value={textInputs.title}
				onChange={onChange}
				fontSize="10pt"
				borderRadius={4}
				_placeholder={{ color: 'gray.500' }}
				placeholder="Title"
				_focus={{ outline: 'none', bg: 'white', border: '1px solid black' }}
			/>
			{selectedFile ? (
				<>
					<Image src={selectedFile} alt="post" />
					<Stack direction={'row'} mt={4}>
						<Button
							height={'28px'}
                            padding={5}
							onClick={() => setSelectedTab('Post')}
						>
							Back to Post
						</Button>
						<Button
							variant={'outline'}
							height="28px"
                            padding={5}
							onClick={() => setSelectedFile('')}
						>
							Remove
						</Button>
					</Stack>
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
