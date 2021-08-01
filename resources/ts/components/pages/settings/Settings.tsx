import React from "react";
import { memo,VFC } from 'react';
import { useCallback } from 'react';
import { Box, useDisclosure, ChakraProvider } from '@chakra-ui/react';
import { Profile } from './Profile';
import { CreateMyRank } from './CreateMyRank';
import { Others } from './Others';


export const Settings: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClick = useCallback(() => onOpen(), []);
  
  const pStyle = {
    color:"#333333"
  };

  const buttonStyle = { 
    width: "400px",
    border: "solid 1px",
    padding: "10px 100px",
    margin: "10px",
    borderColor: "#3aacad",
    color:"#333333"
   }; 

   const linkButtonStyle = {
    width: "40px",
    border: "solid 1px",
    padding: "5px",
    margin: "10px",
    borderColor: "#3aacad",
    color:"#333333",
    borderRadius:"8%"
   };

  return (
    <ChakraProvider>
    <Box textAlign="center" >
    <p style={pStyle} >設定ページ</p>

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
    
    </Box>

    </ChakraProvider>
    
  )
});


