import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Game.module.css'

const Game = () => {
    return (
        <div className={styles.container}>
            <embed className={styles.embed} src="https://armyaali.github.io/Squirrel-Glider1012/" />    
        </div>
    )
}

export default Game