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
              <p className={styles.profileDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim perspiciatis magnam saepe facilis cupiditate omnis officiis consectetur facere earum! Magni dolorem officiis dolore! At, enim beatae! Ipsam itaque, culpa quibusdam quia officiis accusantium obcaecati rem assumenda pariatur autem voluptate quisquam eius impedit, cum atque amet ex illum voluptas iure tempora repellendus porro qui vel. Voluptatum facilis quia error recusandae laudantium reprehenderit quas eaque tempore ratione blanditiis ex, explicabo mollitia ducimus. Eius recusandae rem quis, pariatur esse voluptas similique minima? Qui fugiat sit dignissimos ut error quisquam dolorem dolor rerum, hic accusamus tenetur vel voluptate eos consequatur doloribus enim quo?</p>
          </div>
        </div>
    )
}

export default Intro


