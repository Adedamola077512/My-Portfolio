import React from 'react'
import './Header.css'
import { useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";


import img from '../assets/img.png'
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Type of easing
      once: true, // Whether animation should happen only once
      offset: 100, // Offset (in px) before animation starts
    });
  }, []);
  return (
    <section className='home' id='home'>
      <div className='home-content'>
        <h2 className='typing-text' data-aos="fade-up">Hello, I'm <span className='ade'>Adedayo Gabriel!</span></h2>
        {/* <h3 className='text-animation'> I'm a <span className='name'></span></h3> */}
        <p  data-aos="zoom-in" className='text'>
            I work with busy professionals who need to maximize their time and focus on growing their business. If you're looking for a tech-savvy Virtual Assistant with expertise in Scrum Mastery, Administrative Support, and Content Creation, I'm here to help you streamline processes and drive productivity!
        </p>
        <div className='social-icon'>
          <a href="http://www.linkedin.com/in/adedayo-gabriel-0a521a247"><CiLinkedin /></a>
          <a href="https://web.facebook.com/profile.php?id=100073925255493"><FaFacebook /></a>
          <a href="https://x.com/deewan_special"><FaTwitter /></a>
          <a href="https://www.instagram.com/deewan_special/"><CiInstagram /></a>
        </div>
        <div className='btn-group'>
          <a href="https://wa.link/8oosy6" className='btn'>Hire</a>
          {/* <a href="#" className='btn'>Download CV</a> */}
        </div>
      </div>
        <div className='home-img'  data-aos="fade-left">
          <img src={img} alt="" className='img2'/>
        </div>
      
    </section>
  )
}

export default Header