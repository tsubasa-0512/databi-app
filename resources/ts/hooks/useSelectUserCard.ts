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
    const targetUserCard = userData.find((userData) => userData.id === id);
    setSelectedUserCard(targetUserCard ?? null);
  }, []) 

  return { onSelectUserCard, selectedUserCard }
}

