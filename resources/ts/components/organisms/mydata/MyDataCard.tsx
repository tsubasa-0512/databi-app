import React from "react";
import { memo,VFC } from 'react';
import { Box, Stack, Image, Text  } from '@chakra-ui/react';

type Props = {
  id: number;
  imageUrl: string;
  title: string;
  totalCosts: string;
  dates: string;
  onClick: (id: number) => void;
};

export const MyDataCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, title, totalCosts, dates, onClick } = props;
  return (
    <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          P={4}
          _hover={{ cursor:"pointer", opacity:0.8 }}
          onClick={() => onClick(id)}
          >
          <Stack textAlign="center">
            {/* <Text fontSize="sm" color="gray">
              {id}
            </Text> */}
            <Image
             borderRadius="full"
             boxSize="160px"
             src="http://source.unsplash.com/random"
             alt={imageUrl}
             m="auto"
             />
            <Text fontSize="lg" fontWeight="bold">
              {title}
            </Text>
            <Text fontSize="sm" color="gray">
              {totalCosts}
            </Text>
            <Text fontSize="sm" color="gray">
              {dates}
            </Text>
            
          </Stack>
        </Box>
  )
});
