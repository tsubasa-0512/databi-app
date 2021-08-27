import React, { useCallback, useEffect, useState } from "react";
import { memo,VFC } from 'react';
import { Box, Stack, Image, Text, Flex, Center, Button  } from '@chakra-ui/react';
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import { Data } from "../../../types/api/data";



// type Props = {
//   id: number;
//   category: number;
//   title: string;
//   costs: number;
//   comment: string;
//   imageUrl: string;
  
//   onClick: (id: number) => void;
// };

export const DeleteMyData: VFC = memo((props) => {
  // const { id, category, title, costs, comment, imageUrl } = props;
  const { id } = useParams();
  console.log({id});

  const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

  const onClickDelete = useCallback((id) => {
    alert("削除しますか？");
    console.log("削除id",id);
    Axios.delete(`/api/delete-mytrip?api_token=${api_token}&id=${id}`)
  },[]);

  return (
    <Box paddingLeft="170px">
      <Flex
        mb="10px" 
        textAlign="right" 
        justify="space-between" 
        backgroundColor="red.400"
        color="white"
        p="0.5"
        alignItems="center"
        w="100px"
      >
        <Button 
          size="sm"
          backgroundColor="red.400"
          fontWeight="light"
          borderRadius="none"
          _hover={{ opacity: 0.8 }}
          // disabled={disabled || loading} 
          // isLoading={loading}
          onClick={() => onClickDelete(id)}
        >
          旅行情報削除
        </Button>
        </Flex>
        </Box>
    
  )
});
