import React from 'react';
import Layout from '../components/Layout';
import SwipeableTemporaryDrawer from "../components/shared/drawer"

const About = () => {
    
    return ( 
        <Layout title="A propos" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>Bayileen sope parégouma et en plus <strong>J'ai pas d'inspiration en tout cas </strong> Ciao.</p>

                <a className="btn btn-primary" href="https://google.com">
                    <span className="ml-2 mr-4">Ne cliquez pas sur ce boutton</span></a>
                    <SwipeableTemporaryDrawer/>
            </div>
        </Layout>
     );
}
 
export default About;