import React from "react";
import { memo,ReactNode,VFC } from 'react';

type Props = {
  children: ReactNode;
};


export const AddButton: VFC<Props> = memo((props) => {
  const { children } = props;

  const buttonStyle = {
    width: "300px",
    border: "solid 1px",
    padding: "10px",
    margin: "10px",
    borderColor: "#3aacad",
    color:"#333333"
   };


  return (
    <div>
    <button style={buttonStyle}>
      {children}
    </button>
    </div>
  )
});