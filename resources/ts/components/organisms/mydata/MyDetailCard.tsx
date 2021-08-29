import React, { useCallback } from "react";
import { memo,VFC } from 'react';
import { Box, Image, Flex, Center, Button  } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import Axios from "axios";

type Props = {
  id: number;
  category: string;
  title: string;
  costs: number;
  comment: string;
  imageUrl: string;
  
  // onClick: (id: number) => void;
};

export const MyDetailCard: VFC<Props> = memo((props) => {
  const { id, category, title, costs, comment, imageUrl } = props;

  console.log("詳細情報のid",id);

  const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

  const onClickDeleteDetail = useCallback((id) => {
    alert("削除しますか？");
    console.log("削除id",id);
    Axios.delete(`/api/delete-myitinerary?api_token=${api_token}&id=${id}`)
    .then((res)=>{   
      console.log(res.data)
      }
        ) 
    .catch(error => {
      console.log('Error',error.response);
      });
  },[]);

  
  return (
    <Flex
      w="370px"
      h="60px"
      bg="gray.50"
      color="teal.400"
      align="center"
      justify="space-between"
      mb="5px"
      _hover={{ cursor:"pointer", opacity:0.8 }}
      // onClick={() => onClick(id)}
      >

      <Box>
          <Center 
          fontSize="sm">
          {category}
          </Center>
      </Box>
      <Box 
      >
      <Center fontSize="sm">
       {title}
      </Center>
      </Box>
      <Box>
      <Center fontSize="sm">
       {costs}
      </Center>
      </Box>
      <Box>
      <Center fontSize="sm">
       {comment}
      </Center>
      </Box>
      <Box textAlign="right">
      <Image
        // borderRadius="full"
        // boxSize="40px"
        w="60px"
        h="60px"
        src="http://source.unsplash.com/random"
        alt={imageUrl}
        m="auto"
        />
      </Box>
      <Button
      size="xs"
      backgroundColor="red.400"
      color="white"
      fontWeight="light"
      borderRadius="none"
      _hover={{ opacity: 0.8 }}
      // disabled={disabled || loading} 
      // isLoading={loading}
      onClick={() => onClickDeleteDetail(id)}
      >削除</Button>
    </Flex>
  )
});
