import React from "react";
import { memo, VFC } from 'react'
import { Wrap, WrapItem, ChakraProvider, Box, Stack, Image, Text, useDisclosure, Spinner, Center } from '@chakra-ui/react';
import { ShareDataCard } from '../organisms/sharedata/ShareDataCard';
import { MyDataDetailModal } from '../organisms/mydata/AddDetailModal';
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";


export const ShareData: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  const arrShareData: { id: number, title:string } = { id: 6, title:"title" }; 
  console.log(arrShareData);

  const onClickData = useCallback((id:number) =>  {
    console.log(id);
  },[]);

  const style = {
    textDecoration:"none"
   };

  return (
    <ChakraProvider>
    {/* {loading ? (
      <Center h="100vh">
      <Spinner />
      </Center>
    ) : ( */}
    <Wrap justify="center" p={{ base: 4, md: 10 }}>
      <Link style={style} to={{ pathname: "/sharedata/6", state: arrShareData }}>
      <WrapItem mx="auto">
        <ShareDataCard 
         id="id"
         imageUrl="http://source.unsplash.com/random"
         title="旅タイトル"
         totalCosts="100000"
         dates="日程"
         onClick={onClickData}
        />
      </WrapItem>
      </Link>
    </Wrap>
    
    {/* )} */}
    </ChakraProvider>
    
  )
});