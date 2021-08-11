import React from "react";
import { memo,VFC } from 'react';
import { RouteComponentProps, useParams } from "react-router-dom";

import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";

import { DataDetail } from "../layout/DataDetail";
import { DataDetailHeaders } from "../layout/DataDetailHeaders";
import { DataDetailTitle } from "../layout/DataDetailTitle";


type Props = RouteComponentProps<{
  id: string;
  
}>;

export const MyDataDetail: VFC= memo((props) => {
  
  const { id } = useParams();
  console.log({id})

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
        <Box bg="orange.200" mb="8px">
        <Center h="40px"  mb="5px" color="gray.400">食</Center></Box>
        <Box bg="cyan.700" mb="8px">
        <Center h="40px"  mb="5px" color="gray.400">宿</Center></Box>
        <Box bg="green.500" mb="8px">
        <Center h="40px"  mb="5px" color="gray.400">交通</Center></Box>
        <Box bg="pink.400" mb="8px">
        <Center h="40px"  mb="5px" color="gray.400">体験</Center></Box>
        
        </Box>
      </WrapItem>
  </Wrap>
  )
});
