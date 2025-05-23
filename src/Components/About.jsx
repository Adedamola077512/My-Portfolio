import React from 'react'
import './About.css'
import adedayo from '../assets/Adedayo.png'
const About = () => {
  return (
    <div className='about py-5 ' id='about'>
        <h1 className='text-center text-white'><b>ABOUT ME</b></h1>
        <div className='container about-flex'>
            <div>
                <h6 className='about-h6'>
                    I am a diligent and results-oriented HR & Administrative <br />professional with over 2 years of experience supporting <br />fast-paced organizations in streamlining operations, managing <br />people processes, and fostering a productive work <br />environment. Currently serving as the HR & Admin Officer at <br />E-Metric Suite Solutions (Workplace Stars), I specialize in <br />coordinating employee relations, recruitment, performance <br />tracking, office administration, and compliance.
                    <br />
                    <br />
                    <br />
                    My role bridges strategic planning and operational execution, <br />ensuring smooth communication between departments, managing HR <br />documentation, onboarding, and supporting organizational <br />growth through people-centered systems and policies.
                </h6>
            </div>
            <div>
                <img src={adedayo} alt="Adedayo" className='img3'/>
            </div>
        </div>
    </div>
  )
}

export default About