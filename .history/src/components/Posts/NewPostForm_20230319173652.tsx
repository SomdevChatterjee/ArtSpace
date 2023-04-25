import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Flex,
	Icon,
	Text,
} from '@chakra-ui/react';
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
import {
	addDoc,
	collection,
	increment,
	serverTimestamp,
	Timestamp,
	updateDoc,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firestore, storage } from '../../firebase/clientApp';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
type NewPostFormProps = {
	user: User;
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

const NewPostForm: React.FC<NewPostFormProps> = ({ user }) => {
	const router = useRouter();
	const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
	const [textInputs, setTextInputs] = useState({
		title: '',
		body: '',
	});
	const [loading, setloading] = useState(false);
	const [error, setError] = useState(false);
	const [selectedFile, setSelectedFile] = useState<string>();
	const handleCreatePost = async () => {
		const { communityId } = router.query;
		// create a new post object => type Post
		const newPost: Post = {
			
			communityId: communityId as string,
			body: textInputs.body,
			creatorId: user?.uid,
			creatorDisplayName: user.email!.split('@')[0],
			title: textInputs.title,
			numberOfComments: 0,
			votesStatus: 0,
			createAt: serverTimestamp() as Timestamp,
		};
		setloading(true);
		try {
			//store the post in db
			const postDocRef = await addDoc(
				collection(firestore, 'posts'),
				newPost
			);

			//check for the selectedfile
			if (selectedFile) {
				// store in storage => getdownloadUrl(return Url)
				const imageRef = ref(storage, `posts/${postDocRef.id}/image`);
				await uploadString(imageRef, selectedFile, 'data_url');
				const downloadUrl = await getDownloadURL(imageRef);

				//update the post doc by adding the imageUrl
				await updateDoc(postDocRef, {
					imageUrl: downloadUrl,
				});
			}
			setloading(false);
		} catch (error: any) {
			console.log(error.message);
			setError(true);
		}

		//redirecting the user back to the community page using the router
		router.back();
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
				{formTabs.map((item, index) => (
					<>
						<TabItem
							key={index}
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
					<InputLink textInputs={textInputs} onChange={onTextChange} />
				)}
			</Flex>
			{error && (
				<>
					<Alert status="error">
						<AlertIcon />
						<Text mr={2} color={"gray.500"}>Error creating post</Text>
					</Alert>
				</>
			)}
		</Flex>
	);
};
export default NewPostForm;
