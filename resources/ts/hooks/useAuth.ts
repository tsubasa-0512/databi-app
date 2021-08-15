import Axios from "axios";
import { useCallback, useEffect } from "react"

export const useAuth = () => {
  const login = useCallback(() => {

    const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

     useEffect(() => {
      getUser()
    },[])

     const getUser = async () => {
      console.log("URL",`/api/myprofile?api_token=${api_token}`)
       await Axios
      .get(`/api/user?api_token=${api_token}`)
      .then( (res) => {
              console.log("user",res.data)
              }).catch(error => {
                   console.log('Error',error.response);
                       });
              }

  }, []);
  return { login }
};