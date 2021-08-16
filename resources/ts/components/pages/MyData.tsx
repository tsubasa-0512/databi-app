import React, {useEffect} from "react";
import { memo,VFC } from 'react';
import { useCallback } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { 
  Wrap, WrapItem, ChakraProvider } from '@chakra-ui/react';
import { MyDataCard } from '../organisms/mydata/MyDataCard';
import { User } from "../../types/api/user";
import { useLoginUser } from "../../hooks/useLoginUser";
// import { useMyData } from "../../hooks/useMyData";


export const MyData: VFC = memo(() => {

  const { setLoginUser } = useLoginUser();
   
  // const { getData } = useMyData()
 
   

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
      getUser();
      // getData();
  },[])

     const getUser = async () => {
      console.log("URL",`/api/myprofile?api_token=${api_token}`)
       await 
       axios.get<User>(`/api/user?api_token=${api_token}`)
      .then( (res) => {
              setLoginUser(res.data);
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
