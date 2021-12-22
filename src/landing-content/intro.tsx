import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Headshot from '../components/headshot'
import styles from '../styles/Intro.module.css'
import Game from './game'

const Intro = () => {
    const [playing, setPlaying] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', e => {
            setWindowWidth(window.innerWidth);
        });
    }, []);

    if (playing && windowWidth >= 1200)
        return (
            <div>
                <div className={styles.resumeButtonContainer} onClick={() => setPlaying(false)}>
                    <button className={styles.resumeButton}>Done playing! Bring Ali Back!</button>
                </div>
                <Game />
            </div>
        )

    if (windowWidth < 1200)
        return (
            <div id="profile" className={styles.profileContainer}>
                <Headshot></Headshot>
                <div className={styles.profileText}>
                    <div className={styles.profileName}>Ali Umar</div>
                    <div className={styles.profileTitle}>Software Developer</div>
                    <p className={styles.profileDesc}>Hi, my name is Ali Umar and I am a Software Developer from Toronto. I have a diploma in Computer Engineering Technology and I'm currently working to get a bachelors in Computer Science. I like programming, going to the gym and eating different kinds of food. I thought I might try making a website with one of the many different web frameworks out there. I usually spend my days playing games, running errands and doing schoolwork. If you'd like to contact me, the best way would be to hit up my discord @LordMushroom#6459.</p>
                    <Link href="/resume">
                        <div className={styles.resumeButtonContainer}>
                            <button className={styles.resumeButton}>R&eacute;sum&eacute;</button>
                        </div>
                    </Link>
                </div>
            </div>
        )
        
    return (
        <div id="profile" className={styles.profileContainer}>
            <Headshot></Headshot>
            <div className={styles.profileText}>
                <div className={styles.profileName}>Ali Umar</div>
                <div className={styles.profileTitle}>Software Developer</div>
                <p className={styles.profileDesc}>Hi, my name is Ali Umar and I am a Software Developer from Toronto. I have a diploma in Computer Engineering Technology and I'm currently working to get a bachelors in Computer Science. I like programming, going to the gym and eating different kinds of food. I thought I might try making a website with one of the many different web frameworks out there. I usually spend my days playing games, running errands and doing schoolwork. If you'd like to contact me, the best way would be to hit up my discord @LordMushroom#6459.</p>
                <Link href="/resume">
                    <div className={styles.resumeButtonContainer}>
                        <button className={styles.resumeButton}>R&eacute;sum&eacute;</button>
                    </div>
                </Link>
                <p className={styles.subText}>I created a web game with my friend. Try it out! It's called Squirrel Glider!!!</p>
                <div className={styles.resumeButtonContainer} onClick={() => setPlaying(true)}>
                    <button className={styles.resumeButton}>Play Squirrel Glider</button>
                </div>
            </div>
        </div>
    )
}

export default Intro


