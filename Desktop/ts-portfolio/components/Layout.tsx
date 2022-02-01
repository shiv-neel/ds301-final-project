import React, { useContext } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex flex-1'>{ children }</div>
        <Footer />
      </div>
  )
}

export default Layout