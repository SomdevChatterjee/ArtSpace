import { Flex, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsLink45Deg, BsMic } from 'react-icons/bs';
import { BiPoll } from 'react-icons/bi';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';
import TabItem from './TabItem';
import TextInput from './PostForm/TextInput';
import InputImage from './PostForm/InputImage';
import InputLink from './PostForm/InputLink';
import { Post } from '../../atoms/PostAtom';
import { User } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
type NewPostFormProps = {
    user:User;
};
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

const NewPostForm: React.FC<NewPostFormProps> = ({user}) => {
    const router = useRouter();
	const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
	const [textInputs, setTextInputs] = useState({
		title: '',
		body: '',
	});
	const [loading, setloading] = useState(false);
	const [selectedFile, setSelectedFile] = useState<string>();
	const handleCreatePost = async () => {
        const {communityId} = router.query;
        // create a new post object => type Post
        const newPost : Post = {
            communityId:communityId as string,
            creatorId:user?.uid,
            creatorDisplayName: user.email!.split("@")[0],

        };
        //store the post in db
        
        //check for the selectedfile
          // store in storage => getdownloadUrl(return Url)
          //update the post doc by adding the imageUrl
            
          
        //redirecting the user back to the community page using the router


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
                        textInputs={textInputs}
                        onChange={onTextChange}
					/>
				)}
				{selectedTab === 'Link' && (
					<InputLink textInputs={textInputs} 
                    onChange={onTextChange}/>
				)}
			</Flex>
		</Flex>
	);
};
export default NewPostForm;
