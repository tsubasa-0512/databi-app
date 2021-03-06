import React, { useState, useEffect, ChangeEvent } from "react";
import { useCallback, memo,VFC } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input, ModalFooter, useDisclosure, MenuButton, Select } from '@chakra-ui/react'; 
import { ModalHeaders } from '../../organisms/layout/ModalHeaders';
import { AddButton } from "../../atoms/button/AddButton";
import axios from "axios";
import Axios from "axios";


type Props = {
//  id: number; 
 isOpen: boolean;
 onClose: () => void;
 onOpen: () => void;
};

export const Profile: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [gender, setGender] = useState([]);
  const [prefecture, setPrefecture] = useState([]);

  const [ userName, setUserName ] = useState('');
  const onChangeUserName = (e:ChangeEvent<HTMLInputElement>) =>
  setUserName(e.target.value); 

  const api_token = document
  .querySelector<HTMLElement>('meta[name="api-token"]')
  .getAttribute("content")

  const getUserName = async() =>{
    await Axios.get(`/api/myprofile?api_token=${api_token}`)
    .then((res)=>{   
      console.log("UserName",res.data)
      setUserName(res.data)
      }
        ) 
    .catch(error => {
      console.log('Error',error.response);
      });
  }  

  useEffect(() => {
    getUserName();
    getMypageSelection();
  },[])

  const onClickProfile = useCallback(() => onOpen(), []);

  const getMypageSelection = async() =>{
    await axios.get("/api/user-form-info")
    .then((res)=>{   
      console.log(res.data['gender'])
      setGender(res.data['gender'])
      console.log(res.data['prefecture'])
      setPrefecture(res.data['prefecture'])
      }
        ) 
    .catch(error => {
      console.log('Error',error.response);
      });
  }

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
        ????????????????????????
      </button>
      <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      >
      <ModalOverlay />
      <ModalContent>
      <ModalHeaders> ????????????????????????</ModalHeaders>
           <ModalCloseButton />
           <ModalBody mx={10}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel fontSize="sm">???????????????</FormLabel>
                <Input
                  type="text" 
                  value={`${userName.name}`} 
                  color="gray"
                  onChange={onChangeUserName}
                  />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">??????</FormLabel>
                <Select>
                  {gender.map((p) =>
                    <option 
                    value={p.id}
                    >
                      {p.gender}
                    </option>)}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">??????</FormLabel>
                <Input value="????????????" color="gray"/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">?????????</FormLabel>
                <Select>
                  {prefecture.map((p) =>
                    <option 
                    value={p.id}
                    >
                      {p.name}
                    </option>)}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel  fontSize="sm">link</FormLabel>
                <Input value="" color="gray" isReadOnly />
              </FormControl>
              <AddButton>???</AddButton>
              <FormControl>
                <FormLabel  fontSize="sm">??????</FormLabel>
                <Input value="" color="gray" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button mr={3}>??????</Button>
            {/* <Button onClick={onClose}>???????????????</Button> */}
          </ModalFooter>
      </ModalContent>
     </Modal>
    </>
  )
});



