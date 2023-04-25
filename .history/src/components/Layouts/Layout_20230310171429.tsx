import React from 'react';

type LayoutProps = {

};

const Layout:React.FC<LayoutProps> = ({children}) => {
    
    return (
        <Nav/>
        <main>{children}</main>
    );
}
export default Layout;