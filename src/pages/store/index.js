import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Boutique" description="Trouvez votre bonheur" >
            <div >
                <div className="text-center mt-5">
                    <h1>Kando market</h1>
                    <p>Ceci est la page du magasin.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;