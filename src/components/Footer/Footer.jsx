"use"
import React from 'react'
import './Footer.css'
import fb from '../../../public/background/vecteezy.png'
import twitter from '../../../public/background/twitter.jpg'
import linkedin from '../../../public/background/linkdin.jpg'
import instagram from '../../../public/background/instagram.jpg'
import usericon from '../../../public/background/high-fg.jpg'
import { Facebook, Image, Instagram, Linkedin, Twitter } from 'lucide-react'
import {Icon123, IconBrandFacebook,IconBrandFacebookFilled} from'@tabler/icons-react';

const Footer = () => {
  return (
    <div className="m-24  py-0 " >
   <div className="footer" >
    <div className="sb-footer  section-padding">
      <div className="sb-footer-links" >
        <div className="sb-footer-links-div"  >
          <h4>For Business</h4>
          <a href="/employer">
          <p> Employer</p>
           </a>
           <a href="/3d work">
          <p> 3d work</p>
           </a>
           <a href="/individuals">
          <p> individuals</p>
           </a>
        </div>
        <div  className="sb-footer-links-div" >
          <h4>Resources</h4>
          <a href="/resources">
          <p> Resource center</p>
           </a>
           <a href="/resources">
          <p> Testimonials</p>
           </a>
           <a href="/resources">
          <p> STV</p>
           </a>
        </div>
        <div className="sb-footer-links-div">
          <h4>Partners</h4>
          <a href="/employer">
          <p> 3D Art</p>
           </a>
         </div>
         <div className="sb-footer-links-div">
          <h4>Company</h4>
          <a href="/about">
          <p> About</p>
           </a>
           <a href="/projects">
          <p> Projects</p>
           </a>
          <a href="/contact">
          <p>Contact</p>
           </a>
           <a href="/home">
          <p> Home</p>
           </a>
           <div  className="footer-top-right">
            <div className="footer-email-input" >       
            <Image src={usericon} alt="" />
            <input type='email' placeholder='Enter your email'/>
         </div>
         <div  className="footer-subscribe"  >Subscribe
         </div> 
          </div>
        </div>
        <div   className="sb-footer-links-div" >
          <h4>Coming soon on</h4>
          <div className="socialmedia items-center justify-center">
            <p className=' hover:text-yellow-500 hover:rotate-45 py-1 border-e-4 border-t-4 border-r-background border-cyan-300'><Facebook src={IconBrandFacebook} alt=""/></p>
            <p className=' hover:text-yellow-500 hover:rotate-45  py-1 border-r-background border-e-4 border-t-4 border-cyan-300'  ><Twitter src={twitter} alt=""/></p>
            <p className=' hover:text-yellow-500 hover:rotate-45  py-1 border-r-background border-e-4 border-t-4 border-cyan-300' ><Linkedin src={linkedin} alt=""/></p>
            <p className=' hover:text-yellow-500 hover:rotate-45 py-1 border-r-background border-e-4 border-t-4 border-cyan-300' ><Instagram src={instagram} alt=""/></p>

          </div>

        </div>
       </div>
       <hr></hr>
       <div   className="sb-footer-below" > 
        <div className="sb-footer-copyright" >
          <p className="container relative ">
             @{new Date().getFullYear()} Artist Dimesion. All right reserved.
          </p>
        </div>
        <div className="sb-footer-links">
          <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          <a href="/privacy"><div><p>Privacy</p></div></a>
          <a href="/security"><div><p>Security</p></div></a>
          <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
         

        </div>

       </div>
    </div>
  </div>
  </div>
  )
}

export default Footer
