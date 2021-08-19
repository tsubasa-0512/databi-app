import React from "react";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Data } from "../types/api/data";


export const useMyData = () => {
  // const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<Array<Data>>();

  const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

  //   useEffect(() => {
  //     getData()
  // },[])

  const getData = useCallback(() => {
    axios
     .get<Array<Data>>(`/mytrip?api_token=${api_token}`)
     .then((res) => {
      setUserData(res.data);
      console.log("mytrip",res.data)}) 
     .catch(error => {
       console.log(error)
     });
  },[]);

  console.log( "成功して"  ,userData)

  return { getData, userData };

};