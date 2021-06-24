import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';


import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - Trouvez votre bonheur" : "Kando" }</title>
            <meta name = "description" content={ description || "Kando" } />
        </Helmet>
        <Header/>
        <main style={{'paddingTop':'50px'}} className="container-fluid">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;