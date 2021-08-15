import React, {useEffect} from "react";
import { memo,VFC } from 'react';
import { useCallback } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { 
  Wrap, WrapItem, ChakraProvider } from '@chakra-ui/react';
import { MyDataCard } from '../organisms/mydata/MyDataCard';
import { User } from "../../types/api/user";

export const MyData: VFC = memo(() => {
  

  const onClickMyData = useCallback((id: number) => {
    console.log(id);
    }, []);
  
   const style = {
      textDecoration:"none"
     };

   const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    useEffect(() => {
      getUser()
  },[])

     const getUser = async () => {
      console.log("URL",`/api/myprofile?api_token=${api_token}`)
       await 
       axios.get<User>(`/api/user?api_token=${api_token}`)
      .then( (res) => {
              console.log("user",res.data)
              }).catch(error => { 
                   console.log('Error',error.response);
                       });
              }

  return (
    <ChakraProvider>

    <Wrap justify="center" p={{ base: 4, md: 10 }}>
    <Link style={style} to={{ pathname: "/home/:id" }}>
      <WrapItem key={1} mx="auto">
        <MyDataCard 
         id={1}
         imageUrl="http://source.unsplash.com/random"
         title="旅タイトル"
         totalCosts="合計金額"
         dates="日程"
         onClick={onClickMyData}
        />
      </WrapItem>
      </Link>

        
    </Wrap>
    
    
   
    </ChakraProvider>
  )
});
