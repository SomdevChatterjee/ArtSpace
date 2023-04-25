import React from 'react';

type ProfileProps = {
    
};

const Profile:React.FC<ProfileProps> = () => {
    
    return (							<MenuItem
        fontWeight={'700'}
        _hover={{
            color: 'yellow.600',
            bg: 'black',
            borderRadius: '20px',
        }}
    >
        <Flex align={'center'}>
            <Icon mr={2} as={CgProfile} />
            Profile
        </Flex>
    </MenuItem>)
}
export default Profile;