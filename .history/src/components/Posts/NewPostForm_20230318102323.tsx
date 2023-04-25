import { Flex } from '@chakra-ui/react';
import React from 'react';
import { BsLink45Deg, BsMic } from 'react-icons/bs';
import { BiPoll } from 'react-icons/bi';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';

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

const NewPostForm: React.FC<NewPostFormProps> = () => {
	return (
		<Flex direction={'column'} bg="white" borderRadius={4} mt={2}>
			<Flex width={'100%'}>
                {formTabs.map()}
            </Flex>
		</Flex>
	);
};
export default NewPostForm;
