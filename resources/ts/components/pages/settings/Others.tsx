import React from "react";
import { useCallback , memo, VFC } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input, ModalFooter, useDisclosure } from '@chakra-ui/react'; 
import { ModalHeaders } from '../../organisms/layout/ModalHeaders';

type Props = {
//  id: number; 
 isOpen: boolean;
 onClose: () => void;
 onOpen: () => void;
 };

export const Others: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onClickOthers = useCallback(() => onOpen(), []);

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
     <button style={buttonStyle}  onClick={onClickOthers}>
      お知らせ・機能設定
    </button>
     <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      >
      <ModalOverlay />
      <ModalContent>
      <ModalHeaders>お知らせ・機能設定</ModalHeaders>
           <ModalCloseButton />
           <ModalBody mx={10} marginBottom={20} >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel fontSize="sm">お知らせ</FormLabel>
                <Input value="" color="gray"/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">機能設定</FormLabel>
                <Input value="" color="gray" marginBottom={8} />
              </FormControl>
                
            <button style={buttonStyle} >利用規約</button>
            <button style={buttonStyle} >プライバシーポリシー</button>
            <button style={buttonStyle} >Q&A</button>
            <button style={buttonStyle} >お問い合わせフォーム</button> 
            </Stack>
          </ModalBody>
      </ModalContent>
     </Modal>
    </>
  )
});



