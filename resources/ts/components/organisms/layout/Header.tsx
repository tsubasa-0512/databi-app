/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { memo,useCallback,VFC } from 'react';
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router';

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer }  from '../../molecules/MenuDrawer';
import { AddData } from "../../pages/AddData";


export const Header: VFC= memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickMyData = useCallback(() => history.push("/home"), [history]);
  const onClickAddData = useCallback(() => history.push("/home/adddata"), [history]);
  const onClickShareData = useCallback(() => history.push("/home/sharedata"), [history]);
  const onClickSettings = useCallback(() => history.push("/home/settings"), [history]);

  return (
    <>
    <Flex 
      as="nav" 
      bg="teal.300" 
      color="gray.50" 
      align="center" 
      justify="space-between"
      padding={{ base:3, md:5 }}
      >
        <Flex 
        align="center" 
        as="a" 
        mr={8} 
        _hover={ {cursor:"pointer" }}
        onClick={onClickMyData}
        >
        <Heading as="h1" fontSize={{ base:"md", md:"lg" }}>
          DaTabi
        </Heading>
        </Flex>
        <Flex 
          align="center" 
          fontSize="sm" 
          flexGrow={2} 
          display={{ base:"none", md:"flex" }} 
        >
          <Box pr={4}>
           <AddData />
          </Box>
          <Box pr={4}>
            <Link onClick={onClickMyData}>私のデータ</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickShareData}>みんなのデータ</Link>
          </Box>
            <Link onClick={onClickSettings}>設定</Link>
        </Flex>
      <MenuIconButton onOpen={onOpen} /> 
    </Flex>
    <MenuDrawer 
    onClose={onClose} 
    isOpen={isOpen} 
    onClickMyData={onClickMyData} 
    onClickAddData={onClickAddData} 
    onClickShareData={onClickShareData} 
    onClickSettings={onClickSettings} 
    />
    </>
  )
});
