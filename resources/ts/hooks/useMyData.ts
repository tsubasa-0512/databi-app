import React from "react";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Data } from "../types/api/data";


export const useMyData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<Data>>();

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
      console.log("/api/mytrip",res.data)}) 
      // setData{res.data})
     .catch(error => {
       console.log(error)
     });
  },[]);

  return { getData, loading, data };

};