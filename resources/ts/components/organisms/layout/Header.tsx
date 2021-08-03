import React from "react";
import { memo,useCallback,VFC } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router';


export const Header: VFC= memo(() => {
  const history = useHistory();

  const onClickMyData = useCallback(() => history.push("/home"), [history]);

  return (
    <>
    <Flex 
      as="nav" 
      bg="clear"
      color="gray.50" 
      align="center" 
      justify="space-between"
      padding={{ base:3, md:5 }}
      >
        <Flex 
        align="center" 
        as="a" 
        mr={8}
        color="teal.500" 
        _hover={ {cursor:"pointer" }}
        onClick={onClickMyData}
        >
        <Heading as="h1" fontSize={{ base:"md", md:"lg" }}>
          DaTabi
        </Heading>
        </Flex>
    </Flex>
    </>
  )
});
