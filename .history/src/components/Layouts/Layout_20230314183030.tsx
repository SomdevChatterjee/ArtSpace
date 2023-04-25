import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

const Layout: React.FC = ({ children }) => {
  // useAuth(); // will implement later at end of tutorial

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;