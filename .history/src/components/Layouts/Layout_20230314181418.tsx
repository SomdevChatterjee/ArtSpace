import React from 'react';


type LayoutProps = {

};

const Layout:React.FC = (children:any) => {
    
    return (
    <>
        // eslint-disable-next-line react/jsx-no-undef
        <Navbar/>
        <main>{children.props}</main>
    </>
    
    );
}
export default Layout;