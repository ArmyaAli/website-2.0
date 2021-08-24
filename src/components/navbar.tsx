import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const Navbar = () => {
    const router = useRouter()

    if (router.pathname === "/contact") {
        return (
            <nav>
                <Link href="/">
                    <div className={styles.titleContainer}>
                        <div className={styles.navTitle}>Ali Umar</div>
                        <div className={styles.navSubtitle}>Software Developer</div>
                    </div>
                </Link>
                <ul className={styles.navLinks}>
                    <Link href="/">
                        <li className={styles.navLinkItem}>
                            Home
                        </li>
                    </Link>
                    <Link href="/resume">
                        <li className={styles.navLinkItem}>
                            Resume
                        </li>
                    </Link>
                    <Link href="/notes">
                        <li className={styles.navLinkItem}>
                            Notes/Bookmarks
                        </li>
                    </Link>
                </ul>
            </nav >
        )
    }

    if (router.pathname === "/resume") {
        return (
            <nav>
                <Link href="/">
                    <div className={styles.titleContainer}>
                        <div className={styles.navTitle}>Ali Umar</div>
                        <div className={styles.navSubtitle}>Software Developer</div>
                    </div>
                </Link>
                <ul className={styles.navLinks}>
                    <Link href="/">
                        <li className={styles.navLinkItem}>
                            Home
                        </li>
                    </Link>
                    <Link href="/notes">
                        <li className={styles.navLinkItem}>
                            Notes/Bookmarks
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li className={styles.navLinkItem}>
                            Contact
                        </li>
                    </Link>
                </ul>
            </nav >
        )
    }

    if (router.pathname === "/notes") {
        return (
            <nav>
                <Link href="/">
                    <div className={styles.titleContainer}>
                        <div className={styles.navTitle}>Ali Umar</div>
                        <div className={styles.navSubtitle}>Software Developer</div>
                    </div>
                </Link>
                <ul className={styles.navLinks}>
                    <Link href="/">
                        <li className={styles.navLinkItem}>
                            Home
                        </li>
                    </Link>
                    <Link href="/resume">
                        <li className={styles.navLinkItem}>
                            Resume
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li className={styles.navLinkItem}>
                            Contact
                        </li>
                    </Link>
                </ul>
            </nav >
        )
    }
    return (
        <nav>
            <Link href="/">
                <div className={styles.titleContainer}>
                    <div className={styles.navTitle}>Ali Umar</div>
                    <div className={styles.navSubtitle}>Software Developer</div>
                </div>
            </Link>
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
                <Link href="/notes">
                    <li className={styles.navLinkItem}>
                        Notes/Bookmarks
                    </li>
                </Link>
                <Link href="/contact">
                    <li className={styles.navLinkItem}>
                        Contact
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar



