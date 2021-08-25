import React, { useEffect } from "react";
import { memo,VFC } from 'react';
import { Box, Stack, Image, Text, Flex, Center  } from '@chakra-ui/react';
import { Link } from "react-router-dom";

type Props = {
  id: number;
  category: string;
  title: string;
  costs: string;
  comment: string;
  imageUrl: string;
  
  // onClick: (id: number) => void;
};

export const MyDetailCard: VFC<Props> = memo((props) => {
  const { id, category, title, costs, comment, imageUrl } = props;

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
      <Center fontSize="sm">
       {category}
      </Center>
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
