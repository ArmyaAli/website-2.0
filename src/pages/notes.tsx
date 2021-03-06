import type { NextPage } from 'next'
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Note from '../components/note'
import NOTES from '../data/notes'
import styles from '../styles/Notes.module.css'

const Notes: NextPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.notesContainer}>
        {
          NOTES.map((note, index) => <Note key={index} title={note.title} body={note.body} link={note.link} />)
        }
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Notes

