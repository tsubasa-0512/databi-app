import React, { ChangeEvent, useState, useEffect } from "react";
import { memo, VFC } from 'react'
import { Modal, ModalContent, ModalOverlay, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input, ModalFooter, Select, Checkbox } from '@chakra-ui/react';

import { ModalHeaders } from '../layout/ModalHeaders';
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import axios from "axios";



type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddDataModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose} = props;

  const [purpose, setPurpose] = useState([]);
  const [goWith, setGoWith] = useState([]);
  const [ inputTitle, setInputTitle ] = useState<string>('');
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

  const api_token = document
  .querySelector('meta[name="api-token"]')
  .getAttribute("content")

  const csrf_token = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content")

  useEffect(() => {
    getSelection()
  },[])

  const getSelection = async() =>{
    await axios.get("/api/trip-form-select")
    .then((res)=>{   
      console.log(res.data['purpose'])
      setPurpose(res.data['purpose'])
      setGoWith(res.data['companion'])
      }
        ) 
    .catch(error => {
      console.log('Error',error.response);
      });
  }  

  const addInputData = () => { 
    alert("新規データ登録");
    axios.post('/api/add-mytrip',{
      title: inputTitle,
      departure: inputDeparture,
      arrival: inputArrival,
      purpose: inputPurpose,
      companion: inputGoWith,
      api_token:api_token
    })
    .then(response => {
      // setInputTitle([...inputTitle, response.data])
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error)
    });
    setInputTitle("");
    };

  return (
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeaders>新規データの登録</ModalHeaders>
           <ModalCloseButton />
           <ModalBody mx={10}>
            <Stack spacing={4}>
              
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
                <Select onChange={onChangeInputPurpose} >
                  {purpose.map((p) =>
                    <option value={p.id}>{p.purpose}</option>
                  )}
                </Select>
              </FormControl>
              <FormControl>
                  <FormLabel fontSize="sm">同行者</FormLabel>
                  <Stack direction="row" align="center" >
                    <Checkbox size="sm"
                    value="1"
                    colorScheme="teal"
                    onChange={handleChange}
                    checked={ inputGoWith.includes('1') }
                    >配偶者</Checkbox>
                    <Checkbox size="sm" colorScheme="teal"
                    value="2"
                    onChange={handleChange}
                    checked={ inputGoWith.includes('2') }
                    >恋人</Checkbox>
                    <Checkbox size="sm" colorScheme="teal" 
                    value="3"
                    onChange={handleChange}
                    checked={ inputGoWith.includes('3') }
                    >子</Checkbox>
                    <Checkbox size="sm" colorScheme="teal"
                    value="4"
                    onChange={handleChange}
                    checked={ inputGoWith.includes('4') }
                    >親</Checkbox>
                    <Checkbox size="sm" colorScheme="teal" 
                    value="5"
                    onChange={handleChange}
                    checked={ inputGoWith.includes('5') }
                    >親族</Checkbox>
                    <Checkbox size="sm" colorScheme="teal"
                    value="6"
                    onChange={handleChange}
                    checked={ inputGoWith.includes('6') }
                    >友人</Checkbox>
                    <Checkbox size="sm" colorScheme="teal"
                    value="7"
                    onChange={handleChange}
                    checked={ inputGoWith.includes('7') }
                    >同僚</Checkbox>
                    <Checkbox size="sm" colorScheme="teal"
                    value="8"
                    onChange={handleChange}
                    checked={ inputGoWith.includes('8') }
                    >その他</Checkbox>
                  </Stack>
              </FormControl>
              <FormControl>
                <FormLabel  fontSize="sm">画像</FormLabel>
                <Input placeholder="画像" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter >
      
            <PrimaryButton
            disabled={inputTitle === ""}
            // loading={loading}
            onClick={addInputData}
            // onClick={onClose} //書き方？
            >
              新規登録
            </PrimaryButton>
            
          </ModalFooter>
        </ModalContent> 
      </Modal>
  )
// }           
});

