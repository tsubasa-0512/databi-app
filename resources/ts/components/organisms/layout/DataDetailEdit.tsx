import React, { useCallback, useEffect, useState } from "react";
import { memo,VFC } from 'react'
import { Box, Center, Image, useDisclosure } from "@chakra-ui/react";
import { SecButton } from "../../atoms/button/secButton";
import { EditTitleModal } from "../mydata/EditTitleModal";
import { useSelectUserTrip } from "../../../hooks/useSelectUserTrip";
import { Data } from "../../../types/api/data";
import Axios from "axios";



type Props = {
  id: number;
  // title: string;
  dates: string;
  purpose: string;
  purpose_id: number;
  companions: number;
  cost: string;
  imageUrl: string;
//  isOpen: boolean;
//  onClose: () => void;
//  onOpen: () => void;
//  onClick: (id: number) => void;
};

export const DataDetailEdit: VFC<Props>= memo((props) => {
  const { id,  dates, purpose, companions, cost, imageUrl } = props;

  const [ userData, setUserData ] = useState<Array<Data>>([]);
 
  const [ selectedUserTrip, setSelectedUserTrip ] = useState<Data | null>(null);

  const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    useEffect(() => {
      getData();
  },[])

  const getData = useCallback(() => {
    Axios
      .get<Array<Data>>(`/api/mytrip?api_token=${api_token}`)
      .then((res) => {
      setUserData(res.data);
      console.log("userTrip",res.data)
      console.log("できるかな？",setUserData)
    }) 
      .catch(error => {
        console.log(error)
      });
  },[]);

  const { isOpen, onOpen, onClose} = useDisclosure();


  const onClickEdit = useCallback((id: number, userData:any ) =>{
   console.log("確認だよOK",id);
   const targetUserTrip = userData.find((data) => data.id === id );
    console.log("保持したい旅行データ",targetUserTrip);
    setSelectedUserTrip(targetUserTrip ?? null);

   onOpen();}, []);


   
  
  // const {children} = props;
  
  return (
  <>
    <Box display="flex">
      <Box 
        w="200px"
        h="260px"
        p={ 4 }
        align="center"
      >
      <Image
        // borderRadius="full"
        boxSize="150px"
        src="http://source.unsplash.com/random"
        alt={imageUrl}
        m="auto"
      />
      </Box>

      <Box 
        w="200px"
        h="260px"
        p={4}
      >

      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400">{dates}</Center></Box>
      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400" placeholder="目的">{purpose}</Center></Box>
      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400" placeholder="同行者">{companions}</Center></Box>
      <Box bg="teal.400" mb="4px">
      <Center w="180" h="30" color="gray.50">{cost}</Center></Box>
      <Box margin="25px">
      <Center 
        // bg="pink"
        w="180px"
        h="30px"
        >
        <SecButton onClick={() => onClickEdit(id,userData)}>編集</SecButton>
        {/* <Button size="xs">編集</Button>
        <Button size="sm">編集</Button> */}
      </Center>
      </Box>
      </Box>

      </Box>
      <EditTitleModal data={selectedUserTrip} isOpen={isOpen} onClose={onClose} />
  </>
  )
});