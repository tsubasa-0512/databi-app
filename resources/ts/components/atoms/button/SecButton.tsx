import React from "react";
import { memo,ReactNode,VFC } from 'react';
import { Button } from "@chakra-ui/react";


type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};


export const SecButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <Button 
      size="xs"
      fontWeight="light"
      borderRadius="none"
      bg="teal.400" 
      color="gray.50" 
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading} 
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
});