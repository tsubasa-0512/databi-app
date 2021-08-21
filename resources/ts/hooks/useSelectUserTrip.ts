import Axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Data } from "../types/api/data";


type Props = {
  id: number;
  userData: Array<Data>
}

export const useSelectUserTrip = () => {

  const [ selectedUserTrip, setSelectedUserTrip ] = useState<Data | null>(null);
  
  const onSelectUserTrip = useCallback((props: Props) => {
    
    const { id, userData } = props;
    console.log("カスタムフック１番目",userData);
    console.log("カスタムフック２番目",id);
    const targetUserTrip = userData.find((trip) => trip.id === id );
    console.log("カスタムフック3番目",id);
    console.log("カスタムフック3番目",userData);
    console.log("カスタムフック４番目",targetUserTrip)
    setSelectedUserTrip(targetUserTrip ?? null);
  }, []) 

  return { onSelectUserTrip, selectedUserTrip }
}

