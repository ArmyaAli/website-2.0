import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.titleContainer}>
                <div className={styles.navTitle}>Ali Umar</div>
                <div className={styles.navSubtitle}>Software Developer</div>
            </div>
            <ul className={styles.navLinks}>
                <Link href="#profile">
                    <li className={styles.navLinkItem}>
                        About
                    </li>
                </Link>
                <Link href="#interests">
                    <li className={styles.navLinkItem}>
                        Interests
                    </li>
                </Link>
                <Link href="#skills">
                    <li className={styles.navLinkItem}>
                        Skills
                    </li>
                </Link>
                <Link href="#projects">
                    <li className={styles.navLinkItem}>
                        Projects
                    </li>
                </Link>
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



