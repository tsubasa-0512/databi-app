import React from "react";
import { ReactNode } from 'react';
import { memo,VFC } from 'react';
import { Footer } from "../organisms/layout/Footer";

type Props = {
  children:ReactNode;
};

export const FooterLayout: VFC<Props> = memo((props) => {
  const {children} = props;
  return (
    <>
      <Footer />
      {children}
    </>
  )
});
