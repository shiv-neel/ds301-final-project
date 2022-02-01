import React, { useState } from 'react'
import Link from 'next/link'
import { BsSun, BsHouse, BsPerson, BsPuzzle } from 'react-icons/bs'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { MdOutlineDarkMode } from 'react-icons/md'
import Logo from './Logo'

const Navbar = () => {
    
  const { colorMode, toggleColorMode } = useColorMode()

  const [activeState, setActiveState] = useState<String>('home')

  const toggleNavColor = (page: String) => {
    setActiveState(page)
  }
  
  return (
      <nav className='flex flex-row justify-between pt-16 mx-20 align-middle'>
        <div className='flex items-center'>
            <Link href='/'>
                <Logo />
            </Link>
        </div>
        <ul className='flex items-center align-center gap-16'>
       
            <li className={activeState==='home' ? 'text-blue-500 font-bold ' : '' + 
            'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold'}>
                <Link href='/'>
                    <a className='flex gap-2' onClick={() => toggleNavColor('home')}>
                        <BsHouse style={{fontSize: 20}} className='mt-0.5'/>
                        Home
                    </a>
                </Link>
            </li>
            <li className={activeState==='about' ? 'text-blue-500 font-bold ' : '' + 
            'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold'}>
                <Link href='/about'>
                    <a className='flex gap-2' onClick={() => toggleNavColor('about')}>
                        <BsPerson style={{fontSize: 20}} className='mt-0.5'/>
                        About
                    </a>
                </Link>
            </li>
            <li className={activeState==='projects' ? 'text-blue-500 font-bold ' : '' + 
            'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold'}>
                <Link href='/projects'>
                    <a className='flex gap-2' onClick={() => toggleNavColor('projects')}>
                        <BsPuzzle style={{fontSize: 20}} className='mt-0.5'/>
                        Projects
                    </a>
                </Link>
            </li>
            <li className={activeState==='contact' ? 'text-blue-500 font-bold ' : '' + 
            'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold'}>
                <Link href='/contact'>
                    <a className='flex gap-2' onClick={() => toggleNavColor('contact')}>
                        <FaRegPaperPlane style={{fontSize: 20}} className='mt-0.5'/>
                        Contact
                    </a>
                </Link>
            </li>
            <li className='shadow-lg shadow-blue-500/40 rounded-lg'>
                  <IconButton aria-label='dark mode button'
                      style={{fontSize: 20}}
                      onClick={toggleColorMode}
                      icon={colorMode==='dark' ? <MdOutlineDarkMode /> : <BsSun />}
                  />
            </li>
        </ul>
      </nav>
  )
};

export default Navbar
