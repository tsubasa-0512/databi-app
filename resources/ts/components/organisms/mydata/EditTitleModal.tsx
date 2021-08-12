import React from "react";
import { memo,VFC } from 'react';
import { 
  FormLabel, ModalBody, ModalCloseButton, ModalHeader, Modal, ModalOverlay,  Stack,  ModalContent,  FormControl, Input,Box, Image, Center, Select, Checkbox } from '@chakra-ui/react';
import { ModalHeaders } from '../layout/ModalHeaders';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { SecButton } from "../../atoms/button/secButton";

type Props = {
  isOpen: boolean
  onClose: () => void;
};

export const EditTitleModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const onClickUpdate = () => {
    alert("更新されました");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}> 
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeaders>データ概要</ModalHeaders>
          <ModalCloseButton />
          <ModalBody mx={10}>
            <Stack spacing={4}>
              <Stack>
                <Box>
              <Box>
              <FormControl>
                <FormLabel fontSize="sm">タイトル</FormLabel>
                <Input 
                placeholder="タイトル" 
                type="text" 
                // value={inputTitle} 
                // onChange={onChangeInputTitle} 
                />
              </FormControl>
              <FormControl>
                <FormLabel>画像</FormLabel>
                <Input value="画像" />
              </FormControl>
              </Box>

              <Box>
              <FormControl>
                <FormLabel fontSize="sm">出発日</FormLabel>
                <Input 
                  type="date" 
                  // value={inputDeparture} 
                  // onChange={onChangeInputDeparture}
                  />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">帰宅日</FormLabel>
                <Input 
                  type="date"   
                  // value={inputArrival} 
                  // onChange={onChangeInputArrival}
                 />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">目的</FormLabel>
                <Select 
                // value={inputPurpose} 
                // onChange={onChangeInputPurpose} 
                >
                  <option value="leisure">レジャー</option>
                  <option value="business">ビジネス</option>
                  <option value="worcation">ワーケーション</option>
                  <option value="bleisure">ブレジャー</option>
                  <option value="other">その他</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">同行者</FormLabel>
                <Stack direction="row" align="center" >
                  <Checkbox size="sm"
                  value="family"
                  colorScheme="teal"
                  // onChange={handleChange}
                  // checked={ inputGoWith.includes('family') }
                  >配偶者</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="partner"
                  // onChange={handleChange}
                  // checked={ inputGoWith.includes('partner') }
                  >恋人</Checkbox>
                  <Checkbox size="sm" colorScheme="teal" 
                  value="children"
                  // onChange={handleChange}
                  // checked={ inputGoWith.includes('children') }
                  >子</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="parents"
                  // onChange={handleChange}
                  // checked={ inputGoWith.includes('parents') }
                  >親</Checkbox>
                  <Checkbox size="sm" colorScheme="teal" 
                  value="relatives"
                  // onChange={handleChange}
                  // checked={ inputGoWith.includes('relatives') }
                  >親族</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="friends"
                  // onChange={handleChange}
                  // checked={ inputGoWith.includes('friends') }
                  >友人</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="coworker"
                  // onChange={handleChange}
                  // checked={ inputGoWith.includes('coworker') }
                  >同僚</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="others"
                  // onChange={handleChange}
                  // checked={ inputGoWith.includes('others') }
                  >その他</Checkbox>
                </Stack>
              </FormControl>
              </Box>
              <Box margin="5" textAlign="right">
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
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
