import React from "react";
import { memo,VFC } from 'react';
import { 
  FormLabel, ModalBody, ModalCloseButton, ModalHeader, Modal, ModalOverlay,  Stack,  ModalContent,  FormControl, Input,Box } from '@chakra-ui/react';
import { ModalHeaders } from '../layout/ModalHeaders';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { AddButton } from '../../atoms/button/AddButton';

type Props = {
  isOpen: boolean
  onClose: () => void;
};

export const MyDataDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const detailStyle = {
    padding: "5px 20px",
    margin: "10px",
    border: "solid 1px",
    borderColor: "#3aacad",
    borderRadius:"2%",
    display:"flex"
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}> 
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeaders>詳細データ</ModalHeaders>
          <ModalCloseButton />
          <ModalBody mx={10}>
            <Stack spacing={4}>
              <Stack >
              <Box>
              <FormControl>
                <FormLabel>タイトル</FormLabel>
                <Input value="タイトル" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>画像</FormLabel>
                <Input value="画像" isReadOnly />
              </FormControl>
              </Box>

              <Box>
              <FormControl>
                <FormLabel>日程</FormLabel>
                <Input value="日程" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>種別</FormLabel>
                <Input value="種別" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>人数</FormLabel>
                <Input value="人数" isReadOnly />
              </FormControl>
              </Box>

              <PrimaryButton>編集</PrimaryButton>
              </Stack>

              <FormControl >
                <FormLabel  style={detailStyle}>
                  詳細データ追加
                  <AddButton>＋</AddButton>
                </FormLabel>
              </FormControl>
            </Stack>

          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
});
