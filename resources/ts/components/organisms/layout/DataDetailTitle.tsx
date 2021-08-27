import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { memo,VFC, ReactNode } from 'react'

type Props = {
  children:ReactNode;
};

export const DataDetailTitle: VFC<Props>= memo((props) => {
  const {children} = props;
  
  return (
  <>
  <Flex 
    w="400px"
    h="30px" 
    align="center"
    justify="center" 
    bg="teal.400"
    color="gray.50" 
  >
  <Heading 
    as="h1" 
    fontSize="lg"
  >
    {children}
  </Heading>
  </Flex>    
  </>
  )
});