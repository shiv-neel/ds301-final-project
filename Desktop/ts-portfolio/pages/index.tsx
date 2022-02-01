import { Button, Heading, useColorMode } from '@chakra-ui/react'
import LandingSVG from '../components/LandingSVG'

export default function Home() {
  return (
    <div className='flex flex-row'>
      <Heading as='h1' size='xl' className='flex p-20'>Insert Dope Landing Page Here</Heading>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maiores nihil ipsum repudiandae? Nesciunt autem quaerat perferendis magnam quas, eum modi sint quae, dolore hic veritatis temporibus est dolor rerum.</p>
      <LandingSVG />

    </div>
  )
}
