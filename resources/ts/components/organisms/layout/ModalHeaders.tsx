import React from "react";
import { memo,VFC, ReactNode } from 'react'
import { ModalHeader } from '@chakra-ui/react';

type Props = {
  children:ReactNode;
};

export const ModalHeaders: VFC<Props>= memo((props) => {
  const {children} = props;
  
  return (
    <>
      <ModalHeader 
      textAlign="center" 
      bg="teal.400" 
      color="gray.50"
      pb={2}
      mb={5}
      >
        {children}
      </ModalHeader>
  </>
  )
});

