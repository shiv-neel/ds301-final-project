import React from 'react'
import Anime, { anime } from 'react-animejs-wrapper'

export const AnimeComponent = () => {

  return (
    <Anime
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'lightgrey',
        alignItems: 'left',
        width: '80px',
      }}
      config={{
        translateX: [-35, 0],
        scale: [0, 1],
        loop: false,
        delay: anime.stagger(100, { start: 200 }),
      }}
    >
      <div style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}>
        Transit
      </div>
      <div style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}>
        Food
      </div>
      <div style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}>
        Events
      </div>
    </Anime>
  )
}