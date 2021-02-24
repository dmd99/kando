import React from 'react';
import Layout from '../../components/Layout';
import HomeSection from "./HomeSection"
import "./homeModule.css"

const Home = () => {
    
    return ( 
        <Layout title="Boutique" description="Trouvez votre bonheur" >
            <h1>Bienvenue chez kando market</h1>
            <HomeSection src="img/main-shoes.jpg" brand="Chaussures pour homme" />
            <HomeSection style={{"backgroundColor":"#FFDE65"}} src="img/main-casques.jpg" brand="Accesoires & Lorems" />
            <HomeSection src="img/main-watch.jpg" brand="Ipsum & dolor" />
            <HomeSection src="img/main-shoes.jpg" brand="abdou khadre" />
        </Layout>
     );
}
 
export default Home;