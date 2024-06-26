import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React from 'react';

type CreateCommunitiesProps = {
    open:boolean;
    handleClose: () => void;
};

const CreateCommunityModal:React.FC<CreateCommunitiesProps> = ({open}, handleClose) => {
    
    return (
        <>
        <Modal isOpen={open} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}
export default CreateCommunityModal;