import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <span className={styles.navTitle}>Ali Umar</span>
            <span className={styles.navSubtitle}>Software Developer</span>
            <ul className={styles.navLinks}>
                <li className={styles.navLinkItem}>
                    About
                </li>
                <li className={styles.navLinkItem}>
                    Skillset
                </li>
                <li className={styles.navLinkItem}>
                    Projects
                </li>
                <li className={styles.navLinkItem}>
                    Interests
                </li>
                <li className={styles.navLinkItem}>
                    Notes/Bookmarks
                </li>
                <li className={styles.navLinkItem}>
                    Contact
                </li>
            </ul>
        </nav>
    )
}

export default Navbar



