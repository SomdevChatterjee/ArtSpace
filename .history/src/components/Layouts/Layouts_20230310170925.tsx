import React from 'react';
import Navbar from './Navbar/Navbar';



const Layouts:React= ({children}) => {
    
    return(
        <>
        <Navbar/>
        <main>{children}</main>
        </>

    );
    
};
export default Layouts;