import React from "react";
import { memo, VFC } from 'react'
import { Wrap, WrapItem, ChakraProvider, Box, Stack, Image, Text, useDisclosure } from '@chakra-ui/react';
import { ShareDataCard } from '../organisms/sharedata/ShareDataCard';
import { MyDataDetailModal } from '../organisms/mydata/MyDataDetailModal';


export const ShareData: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem mx="auto">
        <ShareDataCard 
         imageUrl="http://source.unsplash.com/random"
         title="旅タイトル"
         totalCosts="合計金額"
         dates="日程"
        />
      </WrapItem>

      <WrapItem mx="auto">
        <ShareDataCard 
         imageUrl="http://source.unsplash.com/random"
         title="yubune"
         totalCosts="万"
         dates="6/21-6/23"
        />
        </WrapItem>
        
      <WrapItem mx="auto">
        <ShareDataCard 
         imageUrl="http://source.unsplash.com/random"
         title="日光日帰り"
         totalCosts=""
         dates="5/27"
        />
      </WrapItem>
    </Wrap>
    <MyDataDetailModal isOpen={isOpen} onClose={onClose}  />
    </ChakraProvider>
  )
});