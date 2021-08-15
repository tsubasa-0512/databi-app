import React, { useEffect } from "react";
import { VFC ,memo } from 'react'
import { Switch, Route } from 'react-router-dom';

// import { Login } from '../components/pages/Login';
import { Page404 } from "../components/pages/Page404";
import { myDataRoutes } from "./MyDataRoutes"
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { FooterLayout } from "../components/templates/FooterLayout";
import { MyDataDetail } from "../components/organisms/mydata/MyDataDetail";
import { ShareData } from "../components/pages/ShareData";
import { Settings } from "../components/pages/settings/Settings";
import { shareDataRoutes } from "./ShareDataRoutes";


export const Router: VFC = memo(() => {

  return (
    <Switch>
      <Route exact path="/login">
        {/* <useAuth /> */}
      </Route>
      <Route path="/home" render={({ match: {url} }) => (
        <Switch>
          {myDataRoutes.map((route) => (
            <Route 
            key={route.path} 
            exact={route.exact} 
            path={`${url}${route.path}`}
            >
              <HeaderLayout>
              </HeaderLayout>
                {route.children}
                <FooterLayout>
                </FooterLayout>
            </Route>
          ) )} 
         </Switch>
      )}  />

      <Route path="/sharedata" render={({ match: {url} }) => (
        <Switch>
          {shareDataRoutes.map((route) => (
            <Route
            key={route.path}
            exact={route.exact} 
            path={`${url}${route.path}`}
            >
            <HeaderLayout>
            </HeaderLayout>
            {route.children}
            <FooterLayout>
            </FooterLayout>
            </Route>
          ) )}
        </Switch>
      )} />
         
      <Route exact path="/settings">
        <HeaderLayout>
        </HeaderLayout>
         <Settings />
        <FooterLayout>
        </FooterLayout>
        
      </Route>

      <Route path="*">
        <Page404 />
      </Route>
     </Switch>
  );
});
