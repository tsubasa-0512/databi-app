import React from "react";
import { memo,VFC } from 'react';
import { useCallback } from 'react';
import { Box, useDisclosure, ChakraProvider, Heading } from '@chakra-ui/react';

import { Profile } from './Profile';
import { CreateMyRank } from './CreateMyRank';
import { Others } from './Others';
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { SecButton } from "../../atoms/button/secButton";
import { LogoutButton } from "../../atoms/button/LogoutButton";


export const Settings: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const csrf_token = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content")

  const Logout = () =>  {
    document.querySelector("#logout-form").submit();
  }

  const style = {
    textDecoration:"none"
   };

  return (
    <ChakraProvider>
    <Box 
    textAlign="center" 
    margin="10px"
    >

    <Profile 
    // id={1}
    isOpen={isOpen} 
    onClose={onClose} 
    onOpen={onOpen} />
    <br/>

    <CreateMyRank 
    // id={2}
    isOpen={isOpen} 
    onClose={onClose} 
    onOpen={onOpen} />
    <br/>

    <Others 
    //  id={3}
     isOpen={isOpen} 
     onClose={onClose}
     onOpen={onOpen} />

    <Box p={10} >
      <LogoutButton onClick={Logout}>ログアウト</LogoutButton>
      {/* <SecButton 
      onClick={Logout}>ログアウト</SecButton> */}
      {/* <Link style={style} onClick={Logout}>ログアウト</Link> */}
      <form id="logout-form" action="/logout" method="POST">
      <input type="hidden" name="_token" value={ csrf_token } />
      </form>
    </Box>
    
    </Box>

    </ChakraProvider>
    
  )
});


