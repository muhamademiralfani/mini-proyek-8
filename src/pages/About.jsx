/* eslint-disable no-unused-vars */
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import HeroImage from '../components/HeroImage'
import AboutMeComponent from '../components/AboutMeComponent'

const About = () => {
  return (
    <div className='container mx-auto max-w-screen-xl py-5 px-2'>
      <HeaderComponent>Emir</HeaderComponent>
      <HeroImage />
      <AboutMeComponent />
    </div>
  )
}

export default About