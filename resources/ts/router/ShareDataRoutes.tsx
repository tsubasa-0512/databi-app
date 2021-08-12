import React from "react";
import { ShareData } from "../components/pages/ShareData";
import { ShareDataDetail } from "../components/organisms/sharedata/ShareDataDetail";
import { Page404 } from "../components/pages/Page404";


export const shareDataRoutes = [
  {
    path: "/",
    exact: true,
    children: <ShareData />
  },
  {
    path: "/:id",
    component:{ ShareDataDetail },
    key:"ShareDataDetail.id",
    exact: true,
    children: <ShareDataDetail />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  },
];