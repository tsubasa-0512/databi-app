import React, { useEffect, useState } from "react";
import { memo,VFC } from 'react';
import { Box, Stack, Image, Text, Flex, Center  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Axios from "axios";

type Props = {
  id: number;
  category: number;
  title: string;
  costs: number;
  comment: string;
  imageUrl: string;
  
  // onClick: (id: number) => void;
};

export const MyDetailCard: VFC<Props> = memo((props) => {
  const { id, category, title, costs, comment, imageUrl } = props;

  // const [ category, setCategory] = useState([]);

  // const csrf_token = document
  // .querySelector<HTMLElement>('meta[name="csrf-token"]')
  // .getAttribute("content")

  // const getCategory = async() =>{
  //   await Axios.get(`/api/itinerary-form-select?category_id=${category_id}`)
  //   .then((res)=>{   
  //     console.log(res.data['category'])
  //     setCategory(res.data['category'])
  //     }
  //       ) 
  //   .catch(error => {
  //     console.log('Error',error.response);
  //     });
  // }  

  // useEffect(() => {
  //   getCategory();
  //   },[])

  return (
    <Flex
      w="370px"
      h="60px"
      bg="gray.50"
      color="teal.400"
      align="center"
      justify="space-between"
      mb="5px"
      _hover={{ cursor:"pointer", opacity:0.8 }}
      // onClick={() => onClick(id)}
      >

      <Box>
        {/* { category.map((cate) => ( */}
          <Center 
          // key={cate.category_id} 
          fontSize="sm">
          {/* {cate.category} */}
          {category}
          </Center>
        {/* ))} */}
      </Box>
      <Box 
      >
      <Center fontSize="sm">
       {title}
      </Center>
      </Box>
      <Box>
      <Center fontSize="sm">
       {costs}
      </Center>
      </Box>
      <Box>
      <Center fontSize="sm">
       {comment}
      </Center>
      </Box>
      <Box textAlign="right">
      <Image
        // borderRadius="full"
        // boxSize="40px"
        w="60px"
        h="60px"
        src="http://source.unsplash.com/random"
        alt={imageUrl}
        m="auto"
        />
      </Box>
    </Flex>
  )
});
