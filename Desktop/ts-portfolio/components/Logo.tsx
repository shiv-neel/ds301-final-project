import anime from 'animejs'
import React, { useState, useEffect } from 'react'
import Anime from 'react-animejs-wrapper'
import { VscTerminal } from 'react-icons/vsc'
import '@fontsource/inconsolata'

const Logo = () => {

  return (
    <>
    <Anime
    config={{
      translateX: [150, 0],
      rotate: 720,
      loop: false,
      duration: 2000,
    }}
  >
   <VscTerminal className='text-3xl'/>
  </Anime>
  <Anime
  config={{
    translateY: [-60, 0],
    duration: 500,
    scale: [0, 1],
    loop: false,
    delay: anime.stagger(100, { start: 1000 })
  }} className='flex flex-row'
  >
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>s</div>
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>h</div>
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>i</div>
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>v</div>
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>n</div>
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>e</div>
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>e</div>
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>l</div>
  </Anime>
  <Anime
  config={{

        duration: 850,
        opacity: [1, 0],
        loop: true,
        easing: 'easeInOutExpo',
        delay: 1000
  }}
  >
    <div className='text-2xl' style={{fontFamily: 'Inconsolata'}}>_</div>
  </Anime>
  </>
  )
}

export default Logo
