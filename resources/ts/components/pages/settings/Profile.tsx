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
                <Input
                  type="text" 
                  value={`${userName.name}`} 
                  color="gray"
                  onChange={onChangeUserName}
                  />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">性別</FormLabel>
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
                <FormLabel fontSize="sm">年齢</FormLabel>
                <Input value="西暦選択" color="gray"/>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">居住地</FormLabel>
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



