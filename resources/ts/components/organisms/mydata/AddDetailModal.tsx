import React, { useEffect, useState } from "react";
import { memo,VFC } from 'react';
import { 
  FormLabel, ModalBody, ModalCloseButton, ModalHeader, Modal, ModalOverlay,  Stack,  ModalContent,  FormControl, Input,Box, Select, Checkbox, Flex } from '@chakra-ui/react';
import { ModalHeaders } from '../layout/ModalHeaders';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { AddButton } from '../../atoms/button/AddButton';
import { SecButton } from "../../atoms/button/secButton";
import Axios from "axios";

type Props = {
  isOpen: boolean
  onClose: () => void;
};

export const AddDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const onClickSet = () => {
    alert("登録します");
  };

  // const [ addCategory, setAddCategory ] = useState<number>('');
  // const [category, setCategory] = useState([]);

  // const onChangeAddDetail = e => { 
  //   if(addCategory.includes(e.target.value)) {
  //     setAddCategory(addCategory.filter(item => item !== e.target.value));
  //   }else{
  //     setAddCategory([...addCategory, e.target.value]);
  //   }
  // };

  // const api_token = document
  // .querySelector<HTMLElement>('meta[name="api-token"]')
  // .getAttribute("content")


  // useEffect(() => {
  //   addDetailData()
  // },[])

  // const addDetailData = async() =>{
  //   await Axios.post("/api/add-myitinerary",{
  //     {
  //       // title: inputTitle,
  //       // trip_id: {該当のtripのid}
  //       // api_token:api_token
  //     }
  //   })
  //   .then((res)=>{   
  //     console.log(res.data['category'])
  //     // setPurpose(res.data['purpose'])
  //     setCategory(res.data['category'])
  //     }
  //       ) 
  //   .catch(error => {
  //     console.log('Error',error.response);
  //     });
  // }  





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
                    <FormLabel fontSize="sm">カテゴリ</FormLabel>
                    <Stack 
                    direction="row" 
                    // align="center" 
                    mr="3"
                    >
                      <Checkbox size="sm" colorScheme="teal"
                      // value="1"
                      // onChange={onChangeAddDetail}
                      // checked={ addCategory.includes('1') }
                      >飲食</Checkbox>
                      <Checkbox size="sm" colorScheme="teal"
                      // value="2"
                      // onChange={onChangeAddDetail}
                      // checked={ addCategory.includes('2') }
                      >宿泊</Checkbox>
                      <Checkbox size="sm" colorScheme="teal" 
                      // value="3"
                      // onChange={onChangeAddDetail}
                      // checked={ addCategory.includes('3') }
                      >体験</Checkbox>
                      <Checkbox size="sm" colorScheme="teal"
                      // value="4"
                      // onChange={onChangeAddDetail}
                      // checked={ addCategory.includes('4') }
                      >交通</Checkbox>
                      <Checkbox size="sm" colorScheme="teal" 
                      // value="5"
                      // onChange={onChangeAddDetail}
                      // checked={ addCategory.includes('5') }
                      >その他</Checkbox>
                    </Stack>
                  </FormControl>
                  {/* <FormControl>
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
                  </FormControl> */}

                  <Box margin="5" display="flex">
                    <Box mr="5">
                    <Flex
                    mb="10px" 
                    textAlign="right" 
                    justify="space-between" 
                    border="1px"
                    borderColor="teal.500"
                    p="2"
                    alignItems="center"
                    w="100px"
                    >
                  <Box 
                  // onClick={onClickAdd} 
                  color="gray.500"
                  >
                  画像
                  </Box>
                  <SecButton 
                  // onClick={onClickAdd}
                  >
                  ＋
                  </SecButton>
                  </Flex>
                      {/* <FormControl>
                        <FormLabel></FormLabel>
                        <Input placeholder="画像" />
                      </FormControl> */}
                    </Box>

                    <Box>
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
                  </Box>

                  <Box textAlign="right" margin="5">
                    <PrimaryButton 
                      onClick={onClickSet}
                      >
                      登録
                    </PrimaryButton>
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
