/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const AboutMeComponent = () => {
  const skills = [
    'Extensive experience in UI design, with a strong portfolio of completed projects',
    'Proficiency in design tools such as Adobe Creative Suite and Sketch',
    'Excellent visual design skills, with a strong understanding of layout, color theory, and typography',
    'Ability to create wireframes and prototypes to communicate design concepts',
    'Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams',
    'Experience conducting user research and gathering insights to inform design decisions',
    'Proficiency in HTML, CSS, and JavaScript',
  ];

  const experiences = [
    '5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries',
    'Led the design of a successful e-commerce website, resulting in a 25% increase in online sales',
    'Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage',
    "Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic",
  ];

  const education = [
    'Bachelor of Science in Computer Science from University of California, Los Angeles',
    'Graduated with a 3.8 GPA',
  ];

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state

  return (
    <main className='mx-auto p-6'>
      <div className='mb-8'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>About Me</h2>
        <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#C0C5D0]' : 'text-gray-500'}`}>
          As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user experiences that meet the needs of my clients and their users. I have a strong understanding of design principles and a
          proficiency in design tools, and I am comfortable working with cross-functional teams to bring projects to fruition. I am confident in my ability to create designs that are both visually appealing and functional, and I am always
          looking for new challenges and opportunities to grow as a designer.
        </p>
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-2'>Skills:</h2>
        <ul className='list-disc list-inside pl-5'>
          {skills.map((skill, index) => (
            <li key={index} className={`text-lg md:text-xl ${isDarkMode ? 'text-[#C0C5D0]' : 'text-gray-600'} mb-1`}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-2'>Experience:</h2>
        <ul className='list-disc list-inside pl-5'>
          {experiences.map((experience, index) => (
            <li key={index} className={`text-lg md:text-xl ${isDarkMode ? 'text-[#C0C5D0]' : 'text-gray-600'} mb-1`}>
              {experience}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='text-2xl md:text-3xl font-semibold mb-2'>Education:</h2>
        <ul className='list-disc list-inside pl-5'>
          {education.map((edu, index) => (
            <li key={index} className={`text-lg md:text-xl ${isDarkMode ? 'text-[#C0C5D0]' : 'text-gray-600'} mb-1`}>
              {edu}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AboutMeComponent;
