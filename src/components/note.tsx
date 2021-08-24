import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Note.module.css'

interface prop {
    title: string;
    body: string;
    link: string;
};

const Note = (prop: prop) => {
    return (
        <div className={styles.noteContainer}>
            <div className={styles.noteTitle}>{prop.title}</div>
            <hr className={styles.divider}/>
            <div className={styles.noteBody}>{prop.body}</div>
            <hr className={styles.divider}/>
            <div className={styles.noteLink}>
                <a href={prop.link}>ADD ME</a></div>
        </div>
    )
}

export default Note





