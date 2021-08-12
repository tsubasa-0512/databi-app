import React from "react";
import { memo,VFC } from 'react';
import { 
  FormLabel, ModalBody, ModalCloseButton, ModalHeader, Modal, ModalOverlay,  Stack,  ModalContent,  FormControl, Input,Box, Select } from '@chakra-ui/react';
import { ModalHeaders } from '../layout/ModalHeaders';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { AddButton } from '../../atoms/button/AddButton';

type Props = {
  isOpen: boolean
  onClose: () => void;
};

export const AddDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const onClickSet = () => {
    alert("登録します");
  };



  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}> 
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeaders>詳細データ追加画面</ModalHeaders>
          <ModalCloseButton />
          <ModalBody mx={10}>
            <Stack spacing={4}>
              <Stack>
                <Box>
                <FormControl>
              <FormLabel fontSize="sm"></FormLabel>
                <Select 
                // value={inputPurpose} 
                // onChange={onChangeInputPurpose} 
                >
                  <option value="food">飲食</option>
                  <option value="stay">宿泊</option>
                  <option value="traffic">交通</option>
                  <option value="leisure">体験</option>
                  <option value="other">その他</option>
                </Select>
              </FormControl>
              <Box margin="5">
              <FormControl>
              <FormLabel>
                <Input 
                placeholder="タイトル" 
                type="text" 
                // value={inputTitle} 
                // onChange={onChangeInputTitle} 
                />
              </FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel></FormLabel>
                <Input placeholder="画像" isReadOnly />
              </FormControl>
              </Box>

              <Box>
              
              <FormControl>
              <FormLabel fontSize="sm"></FormLabel>
                <Input 
                placeholder="コメント" 
                type="text" 
                // value={inputTitle} 
                // onChange={onChangeInputTitle} 
                />
              </FormControl>
              <FormControl>
              <FormLabel fontSize="sm"></FormLabel>
                <Input placeholder="金額"/>
              </FormControl>
              </Box>
              <Box textAlign="right" margin="5">
              <PrimaryButton onClick={onClickSet}>登録</PrimaryButton>
              </Box>
              </Box>
              </Stack>
            </Stack>

          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
});
