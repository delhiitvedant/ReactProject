import React from 'react';
import image from './image/Anand2.jpg';

const About = () => {
  return (
    <div className="section2">
      <div className='about1'>
        <img src={image} alt ="profile" />
      </div>
      <div>
      <h2>About Me</h2>
      <p>I’m a freelance frontend developer, responsive websites using React, HTML, CSS, and JavaScript.</p>
      <p>I focus on creating smooth user experiences and clean UI designs.</p>
      </div>
    </div>
  );
};

export default About;
  