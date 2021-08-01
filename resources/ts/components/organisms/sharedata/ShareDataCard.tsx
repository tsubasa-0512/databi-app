import React from "react";
import { memo,VFC } from 'react';
import { Box, Stack, Image, Text  } from '@chakra-ui/react';

type Props = {
  imageUrl: string;
  title: string;
  totalCosts: string;
  dates: string;
};

export const ShareDataCard: VFC<Props> = memo((props) => {
  const { imageUrl, title, totalCosts, dates } = props;
  return (
    <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          P={4}
          _hover={{ cursor:"pointer", opacity:0.8 }}
          >
          <Stack textAlign="center">
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
