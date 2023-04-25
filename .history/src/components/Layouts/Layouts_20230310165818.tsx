import React from 'react';


const Layouts:React.FC = ({children}) => {
    
    return 
    {
        <>
            {/* <Navbar/> */}
            <main>{children}</main>

        </>
    }
}
export default Layouts;