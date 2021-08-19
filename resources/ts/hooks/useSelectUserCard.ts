import React, { useCallback, useState } from "react";
import { Data } from "../types/api/data";


type Props = {
  id: number;
  userData: Array<Data>
}

export const useSelectUserCard = () => {
  const [ selectedUserCard, setSelectedUserCard ] = useState<Data | null>(null);
  
  const onSelectUserCard = useCallback((props: Props) => {
    
    const { id, userData } = props;
    console.log("カスタムフック１番目",userData);
    console.log("カスタムフック２番目",id);
    const targetUserCard = userData.find((trip) => trip.id === id );
    console.log("カスタムフック3番目",id);
    console.log("カスタムフック3番目",userData);
    console.log("カスタムフック４番目",targetUserCard)
    setSelectedUserCard(targetUserCard ?? null);
  }, []) 

  return { onSelectUserCard, selectedUserCard }
}

