import React from "react";
import { useCallback } from "react"
import Axios from "axios";
import { User } from "../types/api/user";

export const useAuth = () => {

      const api_token= document
      .querySelector('meta[name="api-token"]')
      .getAttribute("content");

     const getUser = useCallback(() => {
      async () => {
        console.log("URL",`/api/myprofile?api_token=${api_token}`)
         await 
         Axios.get<Array<User>>(`/api/user?api_token=${api_token}`)
        .then( (res) => {
                console.log("user",res.data)
                }).catch(error => {
                      alert("")
                     console.log('Error',error.response);
                         });
                }
     }, []);

  return { api_token, getUser }
};