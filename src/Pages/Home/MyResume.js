import React from 'react';
import Certification from '../../Components/Certification';
import Education from '../../Components/Education';

const MyResume = () => {
    return (
        <div className='md:flex'>
        <Education/>
        <Certification/>
        </div>
    );
};

export default MyResume;