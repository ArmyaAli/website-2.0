import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Notes: NextPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  )
}

export default Notes

