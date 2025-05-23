import React from 'react'
import './Service.css'
const Service = () => {
  return (
    <div className='service' id='service'>
        <h1 className='service-title text-center'><b>My Services</b></h1>
        <div className='service-content container'>
            <div className='service-cup'>Human Resource & <br />People Management</div>
            <div className='service-cup'>Project & <br />Scrum Management</div>
            <div className='service-cup'>Administrative & <br />Operations Support</div>
            <div className='service-cup'>Business Analysis &<br /> Reporting</div>
        </div>
    </div>
  )
}

export default Service