import React, {useEffect} from "react";
import { memo,VFC } from 'react';
import axios from 'axios';
import { 
  Wrap, WrapItem, ChakraProvider } from '@chakra-ui/react';
import { useCallback } from 'react';
import { MyDataCard } from '../organisms/mydata/MyDataCard';

import { Link } from "react-router-dom";

export const MyData: VFC = memo(() => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

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
       await axios
      .get(`/api/user?api_token=${api_token}`)
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

        {/* <WrapItem key={2} mx="auto">
          <Link style={style} to="/home/3">
          <MyDataCard 
          id={2}
          imageUrl="http://source.unsplash.com/random"
          title="佳ら久"
          totalCosts="10万"
          dates="6/13-6/14"
          onClick={onClickMyData}
          />
          </Link>
        </WrapItem>
     

      <WrapItem key={3} mx="auto">
        <MyDataCard 
         id={3}
         imageUrl="http://source.unsplash.com/random"
         title="出雲"
         totalCosts="なし"
         dates="4/1-4/3"
         
        />
      </WrapItem> */}
    </Wrap>
    
    
   
    </ChakraProvider>
  )
});
