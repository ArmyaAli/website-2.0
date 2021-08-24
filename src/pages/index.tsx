import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Interests from '../landing-content/interests'
import Intro from '../landing-content/intro'
import Projects from '../landing-content/projects'
import Skills from '../landing-content/skills'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Interests></Interests>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default Home
