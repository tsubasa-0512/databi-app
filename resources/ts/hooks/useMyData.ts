import { useCallback, useState } from "react";
import axios from "axios";
import { Data } from "../types/api/data";


export const useMyData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<Data>>()

  const getData = useCallback(() => {
    axios
     .get<Array<Data>>('https://jsonplaceholder.typicode.com/posts')
     .then((res) => setData{res.data})
     .catch(error => {
       console.log(error)
     });
  },[]);

  return { getData, loading, data };


};