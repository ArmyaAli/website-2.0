import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.top}>
        <div className={styles.icon}><a href="https://ca.linkedin.com/in/aliumartech"><AiOutlineLinkedin className={styles.rIcon} size="64" /></a></div>
        <div className={styles.icon}><a href="https://twitter.com/I_MainDarius"><AiOutlineTwitter className={styles.rIcon} size="64" /></a></div>
        <div className={styles.icon}><a href="https://github.com/ArmyaAli"><AiOutlineGithub className={styles.rIcon} size="64" /></a></div>
      </div>
      <hr />
      <div className={styles.bot}>
        <div>&copy; Copyright Ali Umar</div>
        <div>Built with NextJS</div>
        <div>Hosted on Github Pages</div>
      </div>
    </div>
  )
}

export default Footer



