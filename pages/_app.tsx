import React from 'react'
import Particles from 'react-tsparticles'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Particles
        className="particles"
        id="tsparticles"
        url="particles.json"
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
