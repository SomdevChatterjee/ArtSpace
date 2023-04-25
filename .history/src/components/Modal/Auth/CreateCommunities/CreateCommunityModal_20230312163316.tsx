import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React from 'react';

type CreateCommunitiesProps = {
    open:boolean;
    handleClose: () => void;
};

const CreateCommunityModal:React.FC<CreateCommunitiesProps> = ({open, handleClose}) => {
    
    return (
        <>
          <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create A Community</ModalHeader>
              <Box></Box>
              <ModalCloseButton />
              <ModalBody>
                Here is the model
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleClose}>
                  Close
                </Button>
                <Button variant='ghost'>Create Community</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}
export default CreateCommunityModal;