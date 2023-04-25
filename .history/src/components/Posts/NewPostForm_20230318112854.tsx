import { Flex, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsLink45Deg, BsMic } from 'react-icons/bs';
import { BiPoll } from 'react-icons/bi';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';
import TabItem from './TabItem';
import TextInput from './PostForm/TextInput';
type NewPostFormProps = {};
const formTabs = [
	{
		title: 'Post',
		icon: IoDocumentText,
	},
	{
		title: 'Link',
		icon: BsLink45Deg,
	},
	{
		title: 'Images and Video',
		icon: IoImageOutline,
	},
	{
		title: 'Talk',
		icon: BsMic,
	},
	{
		title: 'Poll',
		icon: BiPoll,
	},
];
export type tabItem = {
	title: string;
	icon: typeof Icon.arguments;
};

const NewPostForm: React.FC<NewPostFormProps> = () => {
	const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
    const[textInputs, setTextInputs] = useState({
        title: "", 
        body:"", 
    });
    const [selectedFile, setSelectedFile] = useState<string>();
    const handleCreatePost = async () =>{};

    const onSelectImage = () => {};

    const onTextChange = () => {};

	return (
		<Flex direction={'column'} bg="white" borderRadius={4} mt={2}>
			<Flex width={'100%'}>
				{formTabs.map((item) => (
					<>
						<TabItem
							item={item}
							selected={item.title === selectedTab}
							setSelectedTab={setSelectedTab}
						/>
					</>
				))}
			</Flex>
            <Flex>
                <TextInput textInputs={text} onChange={function (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
                    throw new Error('Function not implemented.');
                } } handleCreatePost={function (): void {
                    throw new Error('Function not implemented.');
                } } loading={false} />
            </Flex>
		</Flex>
	);
};
export default NewPostForm;
