import React from "react";
import { memo,VFC } from 'react';
import { RouteComponentProps, useLocation, useParams } from "react-router-dom";
import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { DataDetailHeaders } from "../layout/DataDetailHeaders";
import { DataDetailTitle } from "../layout/DataDetailTitle";
import { DataDetail } from "../layout/DataDetail";


type Props = RouteComponentProps<{
  id: string;
}>;

export const ShareDataDetail: VFC= memo((props) => {
  const { id } = useParams();
  console.log({id})

  const { state } = useLocation();
  console.log(state);

  return (
    <Wrap justify="center" p="4px" mx={{ base: 4, md: 100 }} bg="white" shadow="md">
      <WrapItem mx="auto">
        <Box>
        <DataDetailHeaders>
          ユーザー情報
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
        <Center h="40px"  mb="5px" color="gray.50">食</Center></Box>
        <Box bg="cyan.700" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">宿</Center></Box>
        <Box bg="green.500" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">交通</Center></Box>
        <Box bg="pink.400" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">体験</Center></Box>
        
        </Box>
      </WrapItem>
  </Wrap>
});