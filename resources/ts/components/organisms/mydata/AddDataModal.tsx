import React, { ChangeEvent, useState } from "react";
import { memo,ReactNode,VFC } from 'react'
import { Button, Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input, ModalFooter, Select, Checkbox } from '@chakra-ui/react';
import { ModalHeaders } from '../layout/ModalHeaders';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddDataModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose} = props;

  const [ inputTitle, setInputTitle ] = useState('');
  const [ inputDeparture, setInputDeparture ] = useState('');
  const [ inputArrival, setInputArrival ] = useState('');
  const [ inputPurpose, setInputPurpose ] = useState('');
  const [ inputGoWith, setInputGoWith ] = useState('');

  const [ count, setCount ] = useState()

  const handleSubmit = () {
    
  }

  const onChangeInputTitle = (e:ChangeEvent<HTMLInputElement>) =>
  setInputTitle(e.target.value);
  
  const onChangeInputDeparture = (e:ChangeEvent<HTMLInputElement>) =>
  setInputDeparture(e.target.value);

  const onChangeInputArrival = (e:ChangeEvent<HTMLInputElement>) =>
  setInputArrival(e.target.value);
  
  const onChangeInputPurpose = (e:ChangeEvent<HTMLInputElement>) =>
  setInputPurpose(e.target.value);

  const handleChange = e => { 
    if(inputGoWith.includes(e.target.value)) {
      setInputGoWith(inputGoWith.filter(item => item !== e.target.value));
    }else{
      setInputGoWith([...inputGoWith, e.target.value]);
    }
  };

  
  return (
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeaders>新規データの追加</ModalHeaders>
           <ModalCloseButton />
           <ModalBody mx={10}>
            <Stack spacing={4}>
              {/* <FormControl>
                <FormLabel>ID</FormLabel>
                <Input value="ID" isReadOnly />
              </FormControl> */}
              <FormControl>
                <FormLabel fontSize="sm">タイトル</FormLabel>
                <Input 
                placeholder="タイトル" 
                type="text" 
                value={inputTitle} 
                onChange={onChangeInputTitle} 
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">出発日</FormLabel>
                <Input 
                  type="date" 
                  value={inputDeparture} 
                  onChange={onChangeInputDeparture}
                  />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">帰宅日</FormLabel>
                <Input 
                  type="date"   
                  value={inputArrival} 
                  onChange={onChangeInputArrival}
                 />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">目的</FormLabel>
                <Select value={inputPurpose} onChange={onChangeInputPurpose} >
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
                  onChange={handleChange}
                  checked={ inputGoWith.includes('family') }
                  >配偶者</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="partner"
                  onChange={handleChange}
                  checked={ inputGoWith.includes('partner') }
                  >恋人</Checkbox>
                  <Checkbox size="sm" colorScheme="teal" 
                  value="children"
                  onChange={handleChange}
                  checked={ inputGoWith.includes('children') }
                  >子</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="parents"
                  onChange={handleChange}
                  checked={ inputGoWith.includes('parents') }
                  >親</Checkbox>
                  <Checkbox size="sm" colorScheme="teal" 
                  value="relatives"
                  onChange={handleChange}
                  checked={ inputGoWith.includes('relatives') }
                  >親族</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="friends"
                  onChange={handleChange}
                  checked={ inputGoWith.includes('friends') }
                  >友人</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="coworker"
                  onChange={handleChange}
                  checked={ inputGoWith.includes('coworker') }
                  >同僚</Checkbox>
                  <Checkbox size="sm" colorScheme="teal"
                  value="others"
                  onChange={handleChange}
                  checked={ inputGoWith.includes('others') }
                  >その他</Checkbox>
                  <Checkbox size="sm" colorScheme="teal" 
                  value="others"
                  onChange={handleChange}
                  checked={ inputGoWith.includes('alone') }
                  >なし</Checkbox>
                </Stack>
              </FormControl>
              <FormControl>
                <FormLabel  fontSize="sm">画像</FormLabel>
                <Input placeholder="画像" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} disabled={inputTitle === ""}>新規登録</Button>
            {/* <Button onClick={onClose}>キャンセル</Button> */}
          </ModalFooter>
        </ModalContent> 
      </Modal>
  )
// }           
});

