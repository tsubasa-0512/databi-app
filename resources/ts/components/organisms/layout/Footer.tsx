import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { memo, VFC } from 'react';


export const Footer: VFC= memo(() => {
  return(
    <>
    <Flex
    as="nav" 
    bg="gray" 
    color="gray.50" 
    width="100%"
    align="center" 
    justify="space-between"
    padding={{ base:3, md:5 }} 
    position="absolute"
    bottom= "0"
    >
      <Flex 
        align="center" 
        as="a" 
        mr={8} 
        >
        <Heading as="h1" fontSize={{ base:"md", md:"lg" }}>
          DaTabi
        </Heading>
        </Flex>
    
    </Flex>
    </>
  )
  
});
