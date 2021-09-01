import React, { useState } from "react";
import { memo,VFC } from 'react';
import { 
  FormLabel, ModalBody, ModalCloseButton, ModalHeader, Modal, ModalOverlay,  Stack,  ModalContent,  FormControl, Input,Box, Image, Center, Select, Checkbox, ModalFooter, Button, Flex } from '@chakra-ui/react';
import { ModalHeaders } from '../layout/ModalHeaders';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { Data } from "../../../types/api/data";
import { ChangeEvent } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { detailData } from "../../../types/api/detailData";

type Props = {
  data: detailData | null;
  isOpen: boolean
  onClose: () => void;
};

export const EditDetailModal: VFC<Props> = memo((props) => {
  const { data, isOpen, onClose } = props;

  const [ detailTitle, setDetailTitle ] = useState('');
  const [ comment, setComment ] = useState('');
  const [ detailCosts, setDetailCosts ] = useState<any>('');
  

  useEffect(() => {
    setDetailTitle(data?.title ?? '')
    setComment(data?.comment ?? '')
    setDetailCosts(data?.bill ?? '')
  }, [data])

  const onChangeDetailTitle = (e:ChangeEvent<HTMLInputElement>) =>
  setDetailTitle(e.target.value); 
  const onChangeComment = (e:ChangeEvent<HTMLInputElement>) =>
  setComment(e.target.value); 
  const onChangeDetailCosts = (e:ChangeEvent<HTMLInputElement>) =>
  setDetailCosts(e.target.value); 

  const { id } = useParams();
  console.log({id});

  const api_token = document
  .querySelector<HTMLElement>('meta[name="api-token"]')
  .getAttribute("content")

  const onClickEditDetail = () => { 
    alert("更新します");
    // Axios.post(`/api/update-mytrip?api_token=${api_token}&id=${id}`,{
    //   title: detailTitle,
    //   comment: comment,
    //   bill: detailCosts,
    //   api_token:api_token
    // })
    // .then(response => {
    //   console.log(response.data);
    // })
    // .catch(function(error){
    //   console.log(error)
    // });
    };
  

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}> 
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeaders>詳細データ画面</ModalHeaders>
          <ModalCloseButton />
          <ModalBody mx={10}>
            <Stack spacing={4}>
              <Stack>
                <Box>
                  <FormControl>
                    <FormLabel fontSize="sm">カテゴリ</FormLabel>
                    <Checkbox size="sm" colorScheme="teal"
                      value="1"
                      // onChange={onChangeCategory}
                      // checked={ inputCategory.includes('1') }
                      >飲食</Checkbox>
                      <Checkbox size="sm" colorScheme="teal"
                      value="2"
                      // onChange={onChangeCategory}
                      // checked={ inputCategory.includes('2') }
                      >宿泊</Checkbox>
                      <Checkbox size="sm" colorScheme="teal" 
                      value="3"
                      // onChange={onChangeCategory}
                      // checked={ inputCategory.includes('3') }
                      >体験</Checkbox>
                      <Checkbox size="sm" colorScheme="teal"
                      value="4"
                      // onChange={onChangeCategory}
                      // checked={ inputCategory.includes('4') }
                      >交通</Checkbox>
                      <Checkbox size="sm" colorScheme="teal" 
                      value="5"
                      // onChange={onChangeCategory}
                      // checked={ inputCategory.includes('5') }
                      >その他</Checkbox>
                    </FormControl>
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
                          value={detailTitle} 
                          onChange={onChangeDetailTitle} 
                          />
                        </FormLabel>
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm"></FormLabel>
                          <Input 
                          placeholder="コメント" 
                          type="text" 
                          value={comment} 
                          onChange={onChangeComment} 
                          />
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm"></FormLabel>
                          <Input 
                          placeholder="金額"
                          value={detailCosts} 
                          onChange={onChangeDetailCosts}
                          />
                        </FormControl>
                    </Box>
                  </Box>

                  <Box textAlign="right" margin="5">
                    <PrimaryButton 
                      onClick={onClickEditDetail}
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
