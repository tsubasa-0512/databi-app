import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { memo,VFC } from 'react';
import { 
  FormLabel, ModalBody, ModalCloseButton, ModalHeader, Modal, ModalOverlay,  Stack,  ModalContent,  FormControl, Input,Box, Select, Checkbox, Flex, Button } from '@chakra-ui/react';
import { ModalHeaders } from '../layout/ModalHeaders';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { AddButton } from '../../atoms/button/AddButton';
import { SecButton } from "../../atoms/button/secButton";
import Axios from "axios";
import { useParams } from "react-router-dom";

type Props = {
  isOpen: boolean
  onClose: () => void;
};

export const AddDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const [ inputDetailTitle, setInputDetailTitle ] = useState('');
  const [ inputComment, setInputComment ] = useState('');
  const [ inputCosts, setInputCosts ] = useState('');
  const [ inputCategory, setInputCategory ] = useState('');
  const [ category, setCategory] = useState([]);

  // console.log("カテゴリ",category);

  const onChangeInputDetailTitle = (e:ChangeEvent<HTMLInputElement>) => setInputDetailTitle(e.target.value);
  const onChangeInputComment = (e:ChangeEvent<HTMLInputElement>) => setInputComment(e.target.value);
  const onChangeInputCosts = (e:ChangeEvent<HTMLInputElement>) => setInputCosts(e.target.value);
  const onChangeInputCategory = (e:ChangeEvent<HTMLInputElement>) => setInputCategory(e.target.value);
  // const onChangeCategory = e => { 
  //   if(inputCategory.includes(e.target.value)) {
  //     setInputCategory(inputCategory.filter(item => item !== e.target.value));
  //   }else{
  //     setInputCategory([...inputCategory, e.target.value]);
  //   }
  // };

  const csrf_token = document
  .querySelector<HTMLElement>('meta[name="csrf-token"]')
  .getAttribute("content")

  useEffect(() => {
    getCategory()
  },[])

  const getCategory = async() =>{
    await Axios.get("/api/itinerary-form-select")
    .then((res)=>{   
      console.log(res.data['category'])
      setCategory(res.data['category'])
      }
        ) 
    .catch(error => {
      console.log('Error',error.response);
      });
  }  

  
  const { id } = useParams();
  console.log({id});

  const api_token = document
  .querySelector<HTMLElement>('meta[name="api-token"]')
  .getAttribute("content")


  const onClickAddDetail = () => { 
    alert("登録しますか？");
    Axios.post('/api/add-myitinerary',{
      title: inputDetailTitle,
      comment: inputComment,
      bill: inputCosts,
      category: inputCategory[0],
      trip_id:`${id}`,
      ranking_id: 1,
      rank: 10,
      api_token:api_token
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error)
    });
    setInputDetailTitle("");
    setInputComment("");
    setInputCosts("");
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
                    <FormLabel fontSize="sm">カテゴリ</FormLabel>
                    
                      <Stack
                      direction="row" 
                      mr="3" 
                      onChange={onChangeInputCategory}
                      >
                        <Flex
                        mr="1.5"
                        ml="2"
                        >
                        {category.map((p) => <Checkbox
                        size="sm" 
                        colorScheme="teal"
                        ml="2"
                        value={p.id}>{p.category}</Checkbox> )}
                        </Flex>
                      </Stack>
                      {/* <Checkbox size="sm" colorScheme="teal"
                      value="1"
                      onChange={onChangeCategory}
                      checked={ inputCategory.includes('1') }
                      >飲食</Checkbox>
                      <Checkbox size="sm" colorScheme="teal"
                      value="2"
                      onChange={onChangeCategory}
                      checked={ inputCategory.includes('2') }
                      >宿泊</Checkbox>
                      <Checkbox size="sm" colorScheme="teal" 
                      value="3"
                      onChange={onChangeCategory}
                      checked={ inputCategory.includes('3') }
                      >体験</Checkbox>
                      <Checkbox size="sm" colorScheme="teal"
                      value="4"
                      onChange={onChangeCategory}
                      checked={ inputCategory.includes('4') }
                      >交通</Checkbox>
                      <Checkbox size="sm" colorScheme="teal" 
                      value="5"
                      onChange={onChangeCategory}
                      checked={ inputCategory.includes('5') }
                      >その他</Checkbox> */}
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
                  <Button size="sm">
                  ＋
                  </Button> 
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
                          value={inputDetailTitle} 
                          onChange={onChangeInputDetailTitle} 
                          />
                        </FormLabel>
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm"></FormLabel>
                          <Input 
                          placeholder="コメント" 
                          type="text" 
                          value={inputComment} 
                          onChange={onChangeInputComment} 
                          />
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm"></FormLabel>
                          <Input 
                          placeholder="金額"
                          value={inputCosts} 
                          onChange={onChangeInputCosts}
                          />
                        </FormControl>
                    </Box>
                  </Box>

                  <Box textAlign="right" margin="5">
                    <PrimaryButton 
                      onClick={onClickAddDetail}
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
