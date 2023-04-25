import { NextComponentType, NextPageContext } from "next";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Navbar from "../Navbar/Navbar";

const Layout: React.FC = ({ children }:any) => {
  // useAuth(); // will implement later at end of tutorial

  return (
    <>
      <Navbar />
      {children}
      {console.log()}
    </>
  );
};

export default Layout;
