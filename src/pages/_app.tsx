import React from 'react'
import Particles from 'react-tsparticles'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Particles
        className="particles"
        id="tsparticles"
        url="particles.json"
      />
      <Head>
        <title>Ali&apos;s Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
