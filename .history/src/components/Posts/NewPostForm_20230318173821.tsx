import { Flex, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsLink45Deg, BsMic } from 'react-icons/bs';
import { BiPoll } from 'react-icons/bi';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';
import TabItem from './TabItem';
import TextInput from './PostForm/TextInput';
import InputImage from './PostForm/InputImage';
import InputLink from './PostForm/InputLink';
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
		title: 'Images, File and Video',
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
	const [textInputs, setTextInputs] = useState({
		title: '',
		body: '',
	});
	const [loading, setloading] = useState(false);
	const [selectedFile, setSelectedFile] = useState<string>();
	const handleCreatePost = async () => {
        
        // create a new post object => type Post

        //store the post in db
        
        //check for the selectedfile
          // store in storage => getdownloadUrl(return Url)

    };

	const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();
		if (event.target.files?.[0]) {
			reader.readAsDataURL(event.target.files[0]);
		}
		reader.onload = (readerEvent) => {
			if (readerEvent.target?.result) {
				setSelectedFile(readerEvent.target.result as string);
			}
		};
	};

	const onTextChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {
			target: { name, value },
		} = event;
		setTextInputs((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<Flex direction={'column'} bg="white" borderRadius={4} mt={2}>
			<Flex width={'100%'}>
				{formTabs.map((item) => (
					<>
						<TabItem
							key={item.title}
							item={item}
							selected={item.title === selectedTab}
							setSelectedTab={setSelectedTab}
						/>
					</>
				))}
			</Flex>
			<Flex>
				{selectedTab === 'Post' && (
					<TextInput
						textInputs={textInputs}
						onChange={onTextChange}
						handleCreatePost={handleCreatePost}
						loading={loading}
					/>
				)}
				{selectedTab === 'Images, File and Video' && (
					<InputImage
						setSelectedFile={setSelectedFile}
						onSelectedImage={onSelectImage}
						selectedFile={selectedFile}
						setSelectedTab={setSelectedTab}
                        tes
					/>
				)}
				{selectedTab === 'Link' && (
					<InputLink/>
				)}
			</Flex>
		</Flex>
	);
};
export default NewPostForm;
