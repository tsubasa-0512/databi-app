import React from "react";
import { MyData } from "../components/pages/MyData"; 
import { ShareData } from "../components/pages/ShareData";
import { Settings } from "../components/pages/settings/Settings";
import { Page404 } from "../components/pages/Page404";

export const myDataRoutes = [
  {
    path: "/",
    exact: true,
    children: <MyData />
  },
  {
    path: "/sharedata",
    exact: false,
    children: <ShareData />
  },
  {
    path: "/settings",
    exact: true,
    children: <Settings />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  },
];