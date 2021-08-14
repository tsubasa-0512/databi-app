import React, { useCallback } from "react";
import { memo, VFC } from 'react';
import { useHistory } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";

import { AddData } from "../../pages/AddData";


export const Footer: VFC= memo(() => {
  const history = useHistory();

  const csrf_token = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content")

  const onClickMyData = useCallback(() => history.push("/home"), [history]);
  const onClickShareData = useCallback(() => history.push("/sharedata"), [history]);
  const onClickSettings = useCallback(() => history.push("/settings"), [history]);
  const Logout = () =>  {
    document.querySelector("#logout-form").submit();
  }

  const style = {
    textDecoration:"none"
   };

  return(
    <Flex
    minHeight="100vh"
    position="relative"
    paddingBottom="60px"
    boxSizing="border-box"
    >
      <Flex
      as="nav" 
      bg="gray" 
      color="gray.50" 
      width="100%"
      align="center" 
      justify="center"
      padding={{ base:5, md:8 }} 
      position="fixed"
      bottom= "0"
      >
        <Flex 
        align="center" 
        fontSize={{ base:"sm", md:"md" }} 
        >
          <Box pr={10}>
           <AddData />
          </Box>
          <Box pr={10}>
            <Link style={ style } onClick={onClickMyData}>私のデータ</Link>
          </Box>
          <Box pr={10}>
            <Link style={ style } onClick={onClickShareData}>みんなのデータ</Link>
          </Box>
          <Box pr={10}>
            <Link style={ style } onClick={Logout}>ログアウト</Link>
            <form id="logout-form" action="/logout" method="POST">
              <input type="hidden" name="_token" value={ csrf_token } />
            </form>
          </Box>
            <Link style={ style } onClick={onClickSettings}>設定</Link>
        </Flex>
    
      </Flex>
    </Flex>
  )
  
});
