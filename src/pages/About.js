import React from 'react';
import Layout from '../components/Layout';
import Details from './store/details'
import { GitHubIcon} from '../components/icons'

const About = () => {
    
    return ( 
        <Layout title="A propos" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This project was built for practice purposes using <strong>Context API</strong> by React.</p>

                <a className="btn btn-primary" href="https://github.com/AlexSegen/react-shopping-cart">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Visit Repo</span></a>
            </div>
            <Details/>
        </Layout>
     );
}
 
export default About;