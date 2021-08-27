import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { memo,VFC, ReactNode } from 'react'

type Props = {
  children:ReactNode;
};

export const DataDetailHeaders: VFC<Props>= memo((props) => {
  const {children} = props;
  
  return (
  <>
  <Flex 
    w="400px"
    h="30px" 
    align="center"
    // justify="space-between" 
    // bg="teal.500"
    // color="gray.200" 
  >
  <Heading 
    as="p" 
    fontSize="lg"
    color="gray.200"
  >
    {children}
  </Heading>
  
  </Flex>
  </>
  )
});