import React, { ChangeEvent } from "react";
import { memo,VFC } from 'react';
import { useState } from 'react';
import { Box, Divider, Flex, Heading, Input, Stack} from '@chakra-ui/react';
import { LoginButton } from '../atoms/button/LoginButton';

export const Login: VFC = memo(() => {
  

  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => 
  setUserName(e.target.value);

  const onChangeUserPass = (e: ChangeEvent<HTMLInputElement>) => 
  setUserPass(e.target.value);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" >
          DaTabi 
          <br /> 
          ログイン画面
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
        <Input 
        placeholder="ユーザーネーム" 
        value={userName} 
        onChange={onChangeUserName}
        />
        <Input 
        placeholder="パスワード" 
        value={userPass}
        onChange={onChangeUserPass}
        />
        <LoginButton
        disabled={userName === "" || userPass === ""}
        // loading={loading}
        >
        ログイン
        </LoginButton>
        </Stack>
      </Box>
    </Flex>
  )
});
