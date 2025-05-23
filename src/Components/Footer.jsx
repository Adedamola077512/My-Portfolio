import React from 'react'
import './Footer.css'
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='social'>
          <a href="http://www.linkedin.com/in/adedayo-gabriel-0a521a247"><CiLinkedin /></a>
          <a href="https://web.facebook.com/profile.php?id=100073925255493"><FaFacebook /></a>
          <a href="https://x.com/deewan_special"><FaTwitter /></a>
          <a href="https://www.instagram.com/deewan_special/"> <CiInstagram /></a>
        </div>

        <ul>
            <li>
                <a href="#">About</a>
            </li>

            <li>
                <a href="#">Project</a>
            </li>

            <li>
                <a href="#">Service</a>
            </li>
            
            <li>
                <a href="#">Skill</a>
            </li>
            
            <li>
                <a href="#">Testimoinals</a>
            </li>
        </ul>
        <p className='copyright'>
            Adedamola Obadimu | All Right Reserved
        </p>
    </footer>
  )
}

export default Footer