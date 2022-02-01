import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='flex justify-between mx-10 py-10'>
      <div className='flex items-center'>
        <BiCopyright className='text-2xl'/>
        Shiva Neelakantan 2022
        </div>
      <ul className='flex gap-4 justify-center items-center'>
        <a
          href='https://github.com/shiv-neel'
          className='transition duration-200 hover:scale-125 hover:text-blue-500'
        >
          <BsGithub className="text-2xl"/>
        </a>
        <a
          href='https://linkedin.com/in/shiva-neelakantan'
          className='transition duration-200 hover:scale-125 hover:text-blue-500'
        >
          <BsLinkedin className="text-2xl"/>
        </a>
      </ul>
    </footer>
  )
}

export default Footer
