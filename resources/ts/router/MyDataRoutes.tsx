import React from "react";
import { MyData } from "../components/pages/MyData"; 
import { Page404 } from "../components/pages/Page404";
import { MyDataDetail } from "../components/organisms/mydata/MyDataDetail";

export const myDataRoutes = [
  {
    path: "/",
    exact: true,
    children: <MyData />
  },
  {
    path: "/:id",
    component:{ MyDataDetail },
    key:"MyDataDetail.id",
    exact: true,
    children: <MyDataDetail />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  },
];