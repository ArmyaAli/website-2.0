import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Interests.module.css'

const Interests = () => {
    return (
        <div id="interests" className={styles.interestsContainer}>
            <div className={styles.imageContainer}>
                <Image className={styles.demoImage} src="mushroom_fighter_demo.gif" alt="Demo gif of mushroom fighter using SFML lib" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.heading}>Interests</div>
                <ul className={styles.text}>
                    <li>Game programming</li>
                    <li>Programming languages</li>
                    <li>Compilers</li>
                    <li>Systems programming</li>
                    <li>IoT devices/Embedded systems</li>
                    <li>Distributed Systems</li>
                    <li>Software Design/Architecture</li>
                    <li>Learning</li>
                    <li>Web scraping</li>
                </ul>
            </div>
        </div >
    )
}

export default Interests





