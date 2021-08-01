import React from "react";
import { memo,ReactNode,VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
};


export const LoginButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false } = props;
  return (
    <Button 
    bg="teal.400" 
    color="white" 
    _hover={{ opacity: 0.8 }}
    disabled={disabled || loading} 
    isLoading={loading}
    >
      {children}
    </Button>
  )
});
