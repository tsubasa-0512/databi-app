import React, {useEffect} from "react";
import { memo,VFC } from 'react';
import { useCallback } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { 
  Wrap, WrapItem, ChakraProvider } from '@chakra-ui/react';
import { MyDataCard } from '../organisms/mydata/MyDataCard';
import { User } from "../../types/api/user";

import { useContext } from "react";
import { LoginUserContext } from "../../providers/LoginUserProvider";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useState } from "react";
import { Data } from "../../types/api/data";
import { useSelectUserCard } from "../../hooks/useSelectUserCard";

// import { useMyData } from "../../hooks/useMyData";


export const MyData: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  const { setLoginUser } = useContext(LoginUserContext);

  const [ userData, setUserData ] = useState<Array<Data>>([]);
  
  const { onSelectUserCard, selectedUserCard } = useSelectUserCard();
  

  const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    useEffect(() => {
      getUser();
      getData();
  },[])

     const getUser = 
    //  useCallback(() => {
      async () => {
        console.log("URL",`/api/myprofile?api_token=${api_token}`)
         await 
         axios.get<User>(`/api/user?api_token=${api_token}`)
        .then( (res) => {
                setLoginUser(res.data);
                console.log("user",res.data)
                }).catch(error => { 
                     console.log('Error',error.response);
                         });
                };
  
    //  }, []); 
      
  const getData = useCallback(() => {
    axios
      .get<Array<Data>>(`/api/mytrip?api_token=${api_token}`)
      .then((res) => {
      setUserData(res.data);
      console.log("usertrip",res.data)
    }) 
      .catch(error => {
        console.log(error)
      });
  },[]);


  const onClickMyData = useCallback((id: number) => {
    console.log(id);
    onSelectUserCard({ id, userData })
    console.log("欲しいデータ",selectedUserCard);
    }, []);

   const style = {
      textDecoration:"none"
     };

  return (
    <ChakraProvider>

    <Wrap justify="center" p={{ base: 4, md: 10 }}>     
    {userData.map((userTrip) => (
    <Link style={style} to={{ pathname: `/home/${userTrip.id}` }}>
      <WrapItem key={userTrip.id} mx="auto">
        <MyDataCard 
         id={userTrip.id}
         imageUrl="http://source.unsplash.com/random"
         title={userTrip.title}
         totalCosts="合計金額"
         dates={`${userTrip.departure}→${userTrip.arrival}`}
         onClick={onClickMyData}
        />
      </WrapItem>
      </Link> 
    ) )} 
    </Wrap>

    {/* <Wrap justify="center" p={{ base: 4, md: 10 }}>
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
    </Wrap> */}



    </ChakraProvider>
  )
});
