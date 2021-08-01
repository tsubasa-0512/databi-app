import React from "react";
import { memo,VFC } from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { AddData } from "../pages/AddData";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickMyData: () => void;
  onClickAddData: () => void;
  onClickShareData: () => void;
  onClickSettings: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickMyData, onClickAddData, onClickShareData, onClickSettings } = props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="teal.100">
            <Button w="100%" bg="teal.100" onClick={onClickAddData}>
             <AddData />
              新しいデータの追加</Button>
            
            <Button w="100%" bg="teal.100" onClick={onClickMyData}>私のデータ</Button>
            <Button w="100%" bg="teal.100" onClick={onClickShareData}>みんなのデータ</Button>
            <Button w="100%" bg="teal.100" onClick={onClickSettings}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
      </Drawer>
  )
});

