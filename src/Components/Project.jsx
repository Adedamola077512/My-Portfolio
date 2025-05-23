import React from 'react'
import './Project.css'
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
const Project = () => {
  return (
    <div className='project' id='project'>
        <h1 className='text-center pro'><b>Projects I LOVED Working On.</b></h1>
        <div className='project-flex '>
            <div className='project-text'>
                <h6><b>Calendar Management</b></h6>
                <img src={img1} alt="" className='pro-img'/>
            </div>
            <div className='project-text'>
                <h6><b>Meeting Agenda</b></h6>
                <img src={img2} alt="" className='pro-img'/>
            </div>
            <div className='project-text'>
                <h6><b>Travel Planning</b></h6>
                <img src={img3} alt="" className='pro-img'/>
            </div>
            <div className='project-text'>
                <h6><b>Email Management</b></h6>
                <img src={img4} alt="" className='pro-img'/>
            </div>
        </div>
    </div>
  )
}

export default Project