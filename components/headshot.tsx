import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Headshot.module.css'

const Headshot = () => {
    return (
        <div className={styles.profileContainer}>
           <Image className={styles.profileImage} src="profile2.jpg" alt="Picture of my face"/> 
        </div>
    )
}

export default Headshot




