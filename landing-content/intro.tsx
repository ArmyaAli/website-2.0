import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Headshot from '../components/headshot'
import styles from '../styles/Intro.module.css'

const Intro = () => {
    return (
        <div id="profile" className={styles.profileContainer}>
          <Headshot></Headshot>
          <div className={styles.profileText}>
              <div className={styles.profileName}>Ali Umar</div>
              <div className={styles.profileTitle}>Software Developer</div>
              <p className={styles.profileDesc}>Hi, my name is Ali Umar and I currently reside in Toronto, ON, Canada. I have a diploma in Computer Engineering Technology from Seneca College and I'm currently pursuing a bachelors in Computer Science at York University. I like programming, going to the gym and eating different kinds of food. I thought I might try making a website with one of the many different web frameworks out there and here it is. I usually spend my days playing games, running errands and doing schoolwork. If you'd like to contact me, the best way would be to hit up my discord @LordMushroom#6459.</p>
          </div>
        </div>
    )
}

export default Intro


