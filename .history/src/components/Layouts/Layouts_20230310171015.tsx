import React from 'react';
import Navbar from './Navbar/Navbar';



const Layouts:React.FC= ({children: any}) => {
    
    return(
        <>
        <Navbar/>
        <main>{children}</main>
        </>

    );
    
};
export default Layouts;