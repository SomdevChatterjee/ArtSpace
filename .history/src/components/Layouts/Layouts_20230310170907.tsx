import React from 'react';
import Navbar from './Navbar/Navbar';



const Layouts= ({children:any}) => {
    
    return(
        <>
        <Navbar/>
        <main>{children}</main>
        </>

    );
    
};
export default Layouts;