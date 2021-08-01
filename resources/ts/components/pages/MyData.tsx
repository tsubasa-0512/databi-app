import React from "react";
import { memo,VFC } from 'react'
import { 
  Wrap, WrapItem, ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { useCallback } from 'react';
import { MyDataCard } from '../organisms/mydata/MyDataCard';
import { MyDataDetailModal } from '../organisms/mydata/MyDataDetailModal';

export const MyData: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickMyData = useCallback((id: number) => {
    console.log(id);
    onOpen();}, []);

  return (
    <ChakraProvider>

    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem key={1} mx="auto">
        <MyDataCard 
         id={1}
         imageUrl="http://source.unsplash.com/random"
         title="旅タイトル"
         totalCosts="合計金額"
         dates="日程"
         onClick={onClickMyData}
        />
      </WrapItem>

      <WrapItem key={2} mx="auto">
        <MyDataCard 
         id={2}
         imageUrl="http://source.unsplash.com/random"
         title="佳ら久"
         totalCosts="10万"
         dates="6/13-6/14"
         onClick={onClickMyData}
        />
      </WrapItem>

      <WrapItem key={3} mx="auto">
        <MyDataCard 
         id={3}
         imageUrl="http://source.unsplash.com/random"
         title="出雲"
         totalCosts="なし"
         dates="4/1-4/3"
         onClick={onClickMyData}
        />
      </WrapItem>
    </Wrap>
    
    <MyDataDetailModal isOpen={isOpen} onClose={onClose}  />
   
    </ChakraProvider>
  )
});
