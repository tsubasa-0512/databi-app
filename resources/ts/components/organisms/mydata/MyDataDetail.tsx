import React, { useCallback } from "react";
import { memo,VFC } from 'react';
import { RouteComponentProps, useParams } from "react-router-dom";

import { Box, Center, Flex, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";

import { DataDetail } from "../layout/DataDetail";
import { DataDetailHeaders } from "../layout/DataDetailHeaders";
import { DataDetailTitle } from "../layout/DataDetailTitle";
import { SecButton } from "../../atoms/button/secButton";
import { AddDetailModal } from "./AddDetailModal";


type Props = RouteComponentProps<{
  id: string;
  
}>;

export const MyDataDetail: VFC= memo((props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickAdd = useCallback(() => onOpen(), []);
  
  const { id } = useParams();
  console.log({id});


  return (
    <Wrap justify="center" p="4px" mx={{ base: 4, md: 100 }} bg="white" shadow="md">
      <WrapItem mx="auto">
        <Box>
        <DataDetailHeaders>
          マイデータ詳細　データ追加画面
        </DataDetailHeaders>
        <DataDetailTitle>
          タイトル
        </DataDetailTitle>
        <DataDetail></DataDetail>
        </Box>
      </WrapItem>
      
      <WrapItem alignItems="center">
      <Box w="400px"
        p={4}
        // bg="gray.100"
        >
        <Box paddingLeft="170px">
        <Flex
        mb="10px" 
        textAlign="right" 
        justify="space-between" 
        border="1px"
        borderColor="teal.500"
        p="2"
        alignItems="center"
        w="200px"
        >
          <Box onClick={onClickAdd} color="gray.500">詳細データ追加</Box>
          <SecButton onClick={onClickAdd}>＋</SecButton>
        </Flex>
        </Box>
        <Box bg="orange.200" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">食</Center></Box>
        <Box bg="cyan.700" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">宿</Center></Box>
        <Box bg="green.500" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">交通</Center></Box>
        <Box bg="pink.400" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">体験</Center></Box>
        
        <AddDetailModal isOpen={isOpen} onClose={onClose}/>
        </Box>
      </WrapItem>
  </Wrap>
  )
});
