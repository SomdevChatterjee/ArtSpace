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
}
export default InputLink;