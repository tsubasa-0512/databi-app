import React, { useState } from "react";
import { memo,VFC } from 'react';
import { 
  FormLabel, ModalBody, ModalCloseButton, ModalHeader, Modal, ModalOverlay,  Stack,  ModalContent,  FormControl, Input,Box, Image, Center, Select, Checkbox, ModalFooter } from '@chakra-ui/react';
import { ModalHeaders } from '../layout/ModalHeaders';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { Data } from "../../../types/api/data";
import { ChangeEvent } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

type Props = {
  data: Data | null;
  isOpen: boolean
  onClose: () => void;
};

export const EditTitleModal: VFC<Props> = memo((props) => {
  const { data, isOpen, onClose } = props;

  const [ title, setEditTitle ] = useState('');
  const [ departure, setEditDeparture ] = useState('');
  const [ arrival, setEditArrival ] = useState('');
  // const [ purpose, setEditPurpose ] = useState('');
  // const [ companion, setCompanion ] = useState('');

  useEffect(() => {
    setEditTitle(data?.title ?? '')
    setEditDeparture(data?.title ?? '')
    setEditArrival(data?.arrival ?? '')
  }, [data])

  const onChangeEditTitle = (e:ChangeEvent<HTMLInputElement>) =>
  setEditTitle(e.target.value); 
  const onChangeEditDeparture = (e:ChangeEvent<HTMLInputElement>) =>
  setEditDeparture(e.target.value); 
  const onChangeEditArrival = (e:ChangeEvent<HTMLInputElement>) =>
  setEditArrival(e.target.value); 

  const { id } = useParams();
  console.log({id});

  const api_token = document
  .querySelector<HTMLElement>('meta[name="api-token"]')
  .getAttribute("content")

  const onClickUpdate = () => { 
    alert("更新します");
    Axios.post(`/api/update-mytrip?api_token=${api_token}&id=${id}`,{
      title: title,
      departure: departure,
      arrival: arrival,
      // purpose: purpose,
      // companion: goWith,
      api_token:api_token
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error)
    });
    };
  

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}> 
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeaders>データ概要</ModalHeaders>
          <ModalCloseButton />
          <ModalBody mx={10}>
            {/* <Stack spacing={4}> */}
              {/* <Stack spacing={4}> */}
                <Box>
                  <Box>
                  <FormControl>
                    <FormLabel fontSize="sm">タイトル</FormLabel>
                    <Input 
                    // placeholder="タイトル" 
                    type="text" 
                    value={title} 
                    onChange={onChangeEditTitle} 
                    />
                  </FormControl>
                  <FormControl >
                    <FormLabel fontSize="sm" marginTop="4">画像</FormLabel>
                    <Input value="画像" />
                  </FormControl>
                  </Box>

                  <Box>
                  <FormControl>
                    <FormLabel fontSize="sm" marginTop="4">出発日</FormLabel>
                    <Input 
                      type="date" 
                      value={departure} 
                      onChange={onChangeEditDeparture}
                      />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize="sm" marginTop="4">帰宅日</FormLabel>
                    <Input 
                      type="date"   
                      value={arrival} 
                      onChange={onChangeEditArrival}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize="sm" marginTop="4">目的</FormLabel>
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
                    <FormLabel fontSize="sm" marginTop="4">同行者</FormLabel>
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
                </Box>
              {/* </Stack> */}

            {/* </Stack> */}
          </ModalBody>
          <ModalFooter>
              {/* <Box margin="5" textAlign="right"> */}
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
              {/* </Box> */}
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
});
