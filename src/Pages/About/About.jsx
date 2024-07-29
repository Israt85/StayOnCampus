import React from 'react';
import Banner from '../../Components/About/Banner/Banner';
import AboutHostel from '../../Components/About/AboutHostel/AboutHostel';
import Mission from '../../Components/About/Mission/Mission';

const About = () => {
    return (
        <div className='bg-slate-100'>
            <Banner/>
            <AboutHostel/>
            <Mission/>
            
        </div>
    );
};

export default About;