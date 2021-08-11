import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";
import { memo,VFC, ReactNode } from 'react'

// type Props = {
//   children:ReactNode;
// };

export const DataDetail: VFC= memo(() => {
  // const {children} = props;
  
  return (
  <>
    <Box display="flex">
      <Box 
        w="200px"
        h="260px"
        p={ 4 }
        align="center"
      >
      <Image
        // borderRadius="full"
        boxSize="150px"
        src="http://source.unsplash.com/random"
        alt=""
        m="auto"
      />
      </Box>

      <Box 
        w="200px"
        h="260px"
        p={4}
      >
      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400">日程</Center></Box>
      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400">目的</Center></Box>
      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400">同行者</Center></Box>
      <Box bg="teal.400" mb="4px">
      <Center w="180" h="30" color="gray.50">合計金額</Center></Box>
      </Box>

      </Box>

  </>
  )
});