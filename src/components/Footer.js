import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>
        <h1>Hunger<span>Zone</span> </h1>
        <h3>Develope by Guddu Kumar @2022  &copy</h3>
      </div>
      <div className='right'>
        <h1>Contact Me</h1>
        <a href="https://www.linkedin.com/in/guddu-kumar-283083219/" target="blank" rel="norefferrer noopener" ><LinkedInIcon className='icons' /></a>
        <a href="https://github.com/kguddu" target="blank" rel="norefferrer noopener"><GitHubIcon className="icons" /></a>
        <a href="https://wa.me/+919113769108" target="blank" rel="norefferrer noopener"><WhatsAppIcon className="icons" /></a>


      </div>
    </div>
  )
}

export default Footer