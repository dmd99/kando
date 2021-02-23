import React from 'react';
import Layout from '../../components/Layout';
import HomeSection from "./HomeSection"
import "./homeModule.css"

const Home = () => {
    
    return ( 
        <Layout title="Boutique" description="Trouvez votre bonheur" >
            <HomeSection src="img/main-shoes.jpg" brand="Chaussures pour homme" />
            <HomeSection src="img/main-casques.jpg" brand="Accesoires et Lorems" />
            <HomeSection src="img/main-watch.jpg" brand="abdou khadre" />
            <HomeSection src="img/main-shoes.jpg" brand="abdou khadre" />
        </Layout>
     );
}
 
export default Home;