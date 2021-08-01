import { useCallback, useState } from "react";
import axios from "axios";


export const useMyData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState()

  const getData = useCallback(() => {
    axios
     .get('/api/get')
     .then((res) => setData{res.data})
     .catch(error => {
       console.log(error)
     });
  },[]);

  return { getData, loading, data };


};