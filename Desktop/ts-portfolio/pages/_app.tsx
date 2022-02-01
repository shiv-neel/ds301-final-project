import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/work-sans'
import Layout from '../components/Layout'
import configTheme from '../styles/Theme'
function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={configTheme}>
        <Layout children={<Component {...pageProps} />} />
    </ChakraProvider>
  )
}

export default MyApp

