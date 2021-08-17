import Axios from 'axios';
import React, { memo,useEffect,VFC } from 'react'
import { User } from '../../types/api/user';

export const Login: VFC = memo(() => {

    const api_token= document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    useEffect(() => {
      getUser();
  },[])

     const getUser = async () => {
      console.log("URL",`/api/myprofile?api_token=${api_token}`)
       await 
       Axios.get<User>(`/api/user?api_token=${api_token}`)
      .then( (res) => {
              console.log("user",res.data)
              }).catch(error => { 
                   console.log('Error',error.response);
                       });
              }
return (
      <p>
        ログインページです
      </p> 
  )
});
