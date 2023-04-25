import React from 'react';
import Navbar from './Navbar/Navbar';

type LayoutProps = {

};

const Layout:React.FC = (children:any) => {
    
    return (
    <>
        <Navbar/>
        <main>{<children className="props"></children></main>
    </>
    
    );
}
export default Layout;