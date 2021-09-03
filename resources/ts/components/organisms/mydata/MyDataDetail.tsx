import React, { useCallback, useEffect, useState } from "react";
import { memo,VFC } from 'react';
import { Link, RouteComponentProps, useParams } from "react-router-dom";

import { Box, Center, Flex, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";


import { DataDetailHeaders } from "../layout/DataDetailHeaders";
import { DataDetailTitle } from "../layout/DataDetailTitle";

import { AddDetailModal } from "./AddDetailModal";
import { DataDetailEdit } from "../layout/DataDetailEdit"
import { useMyData } from "../../../hooks/useMyData";
import { Data } from "../../../types/api/data";
import Axios from "axios";
import { MyDetailCard } from "./MyDetailCard";
import { detailData } from "../../../types/api/detailData";
import { SecButton } from "../../atoms/button/secButton";
import { DeleteMyData } from "./DeleteMyData";


type Props = RouteComponentProps<{
  id: string;
  
}>;

export const MyDataDetail: VFC= memo((props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickAdd = useCallback(() => onOpen(), []);
  
  const { id } = useParams();
  console.log({id});

  const [ userData, setUserData ] = useState<Array<Data>>([]);
  const [ userDetailData, setUserDetailData ] = useState<Array<detailData>>([]);

  const [companions, setCompanions] = useState<{}[]>([]);

  const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

  useEffect(() => {
    getData();
    getDetailData();
    getSelection();
    },[])

    const getData = useCallback(() => {
      // console.log("user取れる？",api_token)
      Axios
        .get<Array<Data>>(`/api/show-mytrip?api_token=${api_token}&id=${id}`)
        .then((res) => {
        setUserData(res.data);
        console.log("userTrip",res.data)
      }) 
        .catch(error => {
          console.log(error)
        });
    },[]);

    const getDetailData = useCallback(() => {
      // console.log("user取れる？",api_token)
      Axios
        .get<Array<detailData>>(`/api/get-myitinerary-all?api_token=${api_token}&id=${id}`)
        .then((res) => {
          setUserDetailData(res.data);
        console.log("userDetailTrip",res.data)
      }) 
        .catch(error => {
          console.log(error)
        });
    },[]);

    
    const style = {
      textDecoration:"none"
     };
  
  return (
    <Wrap justify="center" p="4px" mx={{ base: 4, md: 100 }} bg="white" shadow="md">
      {userData.map((userTrip) => (
      <WrapItem key={userTrip.id} mx="auto">
        <Box>
        <DataDetailHeaders>
          マイデータ詳細　データ追加画面
        </DataDetailHeaders>
        <DataDetailTitle>
        {userTrip.title}
        </DataDetailTitle>
        <DataDetailEdit
         id={userTrip.id}
         imageUrl="http://source.unsplash.com/random"
         dates={`${userTrip.departure}${userTrip.arrival}`}
         purpose={userTrip.purpose.purpose}
         companions={
           userTrip.companions.map((com) => (
             com.companion
           ))
          }
         cost="金額"
        />
        </Box>
      </WrapItem>
      ) )}
      
      <WrapItem alignItems="center">
      <Box w="400px"
        p={4}
        // bg="gray.100"
        >
        <Box paddingLeft="170px">
        <Flex
        mb="10px" 
        textAlign="right" 
        justify="space-between" 
        border="1px"
        borderColor="teal.500"
        p="2"
        alignItems="center"
        w="200px"
        >
          <Box onClick={onClickAdd} color="gray.500">詳細データ追加</Box>
          <SecButton onClick={onClickAdd}>＋</SecButton>
        </Flex>
        </Box>

        
        <Wrap justify="center" p={{ base: 4, md: 10 }}>
        {userDetailData.map((userDetailTrip) => (
          // {/* <Link 
          // style={style} 
          // to={{ pathname: "" }}
          // > */}
            <WrapItem key={userDetailTrip.id} mx="auto">
              <MyDetailCard 
              id={userDetailTrip.id}
              category={userDetailTrip.category.category}
              title={userDetailTrip.title}
              costs={userDetailTrip.bill}
              comment={userDetailTrip.comment}
              imageUrl="http://source.unsplash.com/random"
              // onClick={onClick}
              />
            </WrapItem>
          // {/* </Link>   */}
          ) )}
        </Wrap>
      
        {/* <Box bg="cyan.700" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">宿</Center></Box>
        <Box bg="green.500" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">交通</Center></Box>
        <Box bg="pink.400" mb="8px">
        <Center h="40px"  mb="5px" color="gray.50">体験</Center></Box> */}
        
        <AddDetailModal isOpen={isOpen} onClose={onClose}/>
        <DeleteMyData></DeleteMyData>
        </Box>
      </WrapItem>
        
  </Wrap>
  )
});
