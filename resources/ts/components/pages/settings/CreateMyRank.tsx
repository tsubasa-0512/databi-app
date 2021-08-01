import React from "react";
import { useCallback, memo, VFC } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Stack, useDisclosure } from '@chakra-ui/react'; 
import { ModalHeaders } from '../../organisms/layout/ModalHeaders';

type Props = {
//  id: number; 
 isOpen: boolean;
 onClose: () => void;
 onOpen: () => void;
};

export const CreateMyRank: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onClickMyrank = useCallback(() => onOpen(), []);

  const buttonStyle = {
    width: "300px",
    border: "solid 1px",
    padding: "10px",
    margin: "15px",
    borderColor: "#3aacad",
    color:"#333333"
   };

  return (
    <>
     <button style={buttonStyle} onClick={() => onClickMyrank() }>
       マイランキング作成・編集
     </button>
     <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      >
      <ModalOverlay />
      <ModalContent>
      <ModalHeaders>マイランキング作成・編集</ModalHeaders>
           <ModalCloseButton />
           <ModalBody mx={10} paddingTop={5} pb={20} >
            <Stack spacing={4}>
            <button style={buttonStyle} >マイランキングを新規作成</button>
            <button style={buttonStyle} >マイランキングを編集</button>
            </Stack>
          </ModalBody>
      </ModalContent>
     </Modal>
    </>
  )
});


