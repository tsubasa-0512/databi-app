import React, { useEffect, useState } from "react";
import { memo,VFC } from 'react';
import { Box, Stack, Image, Text, Flex, Center, Button  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Axios from "axios";



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

  

  return (
    <Box paddingLeft="170px">
      <Flex
        mb="10px" 
        textAlign="right" 
        justify="space-between" 
        backgroundColor="red.400"
        color="white"
        p="2"
        alignItems="center"
        w="100px"
      >
        <Button 
          size="sm"
          backgroundColor="red.400"
          fontWeight="light"
          borderRadius="none"
          // _hover={{ opacity: 0.8 }}
          // disabled={disabled || loading} 
          // isLoading={loading}
          // onClick={onClick}
        >
          旅行情報削除
        </Button>
        </Flex>
        </Box>
    
  )
});
