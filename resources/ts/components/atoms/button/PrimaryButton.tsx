import React from "react";
import { memo,ReactNode,VFC } from 'react';


type Props = {
  children: ReactNode;
};


export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;

  const style = {
    width:"100px",
    textAlign:'center' as const,
    background: "#20b2aa", 
    border: "solid 1px",
    padding: "5px",
    margin: "20px",
    borderColor: "#3aacad",
    color:"#fffafa",
    borderRadius:"5%"
  };


  return (
    <div style={style}>
    <button>
      {children}
    </button>
    </div>
  )
});
