import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className='border-t-[1px] border-white mt-3'>
        <ul className='flex justify-center my-3 '>
            <a href="https://www.facebook.com/AhmadRaza365" target="_blank" rel='noreferrer'> <FaFacebook  className='text-4xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in'/> </a>
            <a href="https://www.instagram.com/ahmadraza_365" target="_blank" rel='noreferrer'>  <FaInstagram  className='text-4xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in'/> </a>
            <a href="https://twitter.com/AhmadRaza365" target="_blank" rel='noreferrer'> <FaTwitter className='text-4xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in' /> </a>
            <a href="https://www.linkedin.com/in/ahmadraza365/" target="_blank" rel='noreferrer'>  <FaLinkedin  className='text-4xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in'/> </a>
            <a href="http://github.com/AhmadRaza365" target="_blank" rel='noreferrer'> <FaGithub  className='text-4xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in'/></a>
         </ul>

    </footer>
  )
}

export default Footer
