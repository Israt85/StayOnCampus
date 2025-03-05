import React from 'react';
import Banner from '../../Components/About/Banner/Banner';
import AboutHostel from '../../Components/About/AboutHostel/AboutHostel';
import Mission from '../../Components/About/Mission/Mission';
import HostelRooms from '../../Components/About/HostelRooms/HostelRooms';
import QuestionForm from '../../Components/About/QuestionForm/QuestionForm';

const About = () => {
    return (
        <div className='bg-slate-100'>
            <Banner/>
            <AboutHostel/>
           <HostelRooms></HostelRooms>
            <Mission/>
            <QuestionForm></QuestionForm>
            
        </div>
    );
};

export default About;