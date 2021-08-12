import { Box, Button, Center, Flex, Image, useDisclosure } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { memo,VFC, ReactNode } from 'react'
import { SecButton } from "../../atoms/button/secButton";
import { EditTitleModal } from "../mydata/EditTitleModal";

// type Props = {
//   children:ReactNode;
// };

export const DataDetail: VFC= memo((props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickEdit = useCallback(() => onOpen(), []);

  
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
        alt=""
        m="auto"
      />
      </Box>

      <Box 
        w="200px"
        h="260px"
        p={4}
      >

      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400">日程</Center></Box>
      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400">目的</Center></Box>
      <Box border="1px" borderColor="teal.400" mb="5px">
      <Center w="180" h="30" color="gray.400">同行者</Center></Box>
      <Box bg="teal.400" mb="4px">
      <Center w="180" h="30" color="gray.50">合計金額</Center></Box>
      <Box margin="25px">
      <Center 
        // bg="pink"
        w="180px"
        h="30px"
        >
        <SecButton onClick={onClickEdit}>編集</SecButton>
        {/* <Button size="xs">編集</Button>
        <Button size="sm">編集</Button> */}
      </Center>
      </Box>
      </Box>

      </Box>
      <EditTitleModal isOpen={isOpen} onClose={onClose} />
  </>
  )
});