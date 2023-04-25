import React from 'react';


type LayoutProps = {

};

const Layout:React.FC = (children:any) => {
    
    return (
    <>
        <Navbar/>
        <main>{children.props}</main>
    </>
    
    );
}
export default Layout;