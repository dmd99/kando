import React from 'react';
import Layout from '../../components/Layout';

const Home = () => {
    
    return ( 
        <Layout title="Boutique" description="Trouvez votre bonheur" >
            <div className="mt-4 pt-4">
                <div class="row w-100">
                    <div className="col-sm-6">
                        <img className="w-100" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"/>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default Home;