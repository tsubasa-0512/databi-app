import React from "react";
import { useCallback, memo,VFC } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input, ModalFooter, useDisclosure, MenuButton } from '@chakra-ui/react'; 
import { ModalHeaders } from '../../organisms/layout/ModalHeaders';
import { AddButton } from "../../atoms/button/AddButton";


type Props = {
//  id: number; 
 isOpen: boolean;
 onClose: () => void;
 onOpen: () => void;
};

export const Profile: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onClickProfile = useCallback(() => onOpen(), []);

  const buttonStyle = { 
    width: "300px",
    border: "solid 1px",
    padding: "10px",
    margin: "10px",
    borderColor: "#3aacad",
    color:"#333333"
   }; 
 
  return (
    <>
      <button style={buttonStyle} onClick={() => onClickProfile()}>
        プロフィール設定
      </button>
      <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      >
      <ModalOverlay />
      <ModalContent>
      <ModalHeaders> プロフィール設定</ModalHeaders>
           <ModalCloseButton />
           <ModalBody mx={10}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel fontSize="sm">ユーザー名</FormLabel>
                <Input value="ユーザー名" color="gray"/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">workstyle</FormLabel>
                <Input value="選択" color="gray"/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">性別</FormLabel>
                <Input value="選択" color="gray"/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">年齢</FormLabel>
                <Input value="西暦選択" color="gray"/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">居住地</FormLabel>
                <Input value="都道府県選択" color="gray"/>
              </FormControl>
              <FormControl>
                <FormLabel  fontSize="sm">link</FormLabel>
                <Input value="" color="gray" isReadOnly />
              </FormControl>
              <AddButton>＋</AddButton>
              <FormControl>
                <FormLabel  fontSize="sm">画像</FormLabel>
                <Input value="" color="gray" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button mr={3}>更新</Button>
            {/* <Button onClick={onClose}>キャンセル</Button> */}
          </ModalFooter>
      </ModalContent>
     </Modal>
    </>
  )
});



