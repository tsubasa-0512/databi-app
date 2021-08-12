import React from "react";
import { memo,VFC } from 'react'
import { Box , ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { AddDataModal } from '../organisms/mydata/AddDataModal';
import { useCallback } from 'react';

export const AddData: VFC = memo(() => {
 const { isOpen, onOpen, onClose } = useDisclosure()

 const onClickAddData = useCallback(() => onOpen(), []);

 const buttonStyle = {
  // padding: "5px",
  // margin: "10px",
  color:"#ffffff",
  fontSize:"16px",
  fontWeight: '900' as const
 };


  return (
    <ChakraProvider>

    <button style={buttonStyle} onClick={onClickAddData} >＋</button>

      <AddDataModal isOpen={isOpen} onClose={onClose} />

    </ChakraProvider>
  )
});
