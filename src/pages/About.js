import React from 'react';
import Layout from '../components/Layout';
import Details from './store/details'

const About = () => {
    
    return ( 
        <Layout title="A propos" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>Bayileen sope parégouma et en plus <strong>J'ai pas d'inspiration en tout cas </strong> Ciao.</p>

                <a className="btn btn-primary" href="https://pornhub.com">
                    <span className="ml-2 mr-4">Ne cliquez pas sur ce boutton</span></a>
            </div>
            <Details/>
        </Layout>
     );
}
 
export default About;