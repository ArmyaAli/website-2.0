import type { NextPage } from 'next'
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Contact.module.css'

const Contact: NextPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <form className={styles.formContainer} action="https://formspree.io/f/mvovjjvo" method="POST">
        <div className={styles.fNameContainer}>
          <label className={styles.formLabel} htmlFor="fName" >First Name</label>
          <input className={styles.formInput} id="fName" type="text" name="First Name" placeholder="Ali" required/>
        </div>
        <div className={styles.lNameContainer}>
          <label className={styles.formLabel} htmlFor="lName" >Last Name</label>
          <input className={styles.formInput} id="lName" type="text" name="Last Name" placeholder="Umar" required/>
        </div>
        <div className={styles.emailContainer}>
          <label className={styles.formLabel} htmlFor="email">Email</label>
          <input className={styles.formInput} id="email" type="text" name="Email" placeholder="ali.umar.work@gmail.com" required/>
        </div>
        <div className={styles.msgContainer}>
          <label className={styles.formLabel} htmlFor="msg">Message</label>
          <textarea className={styles.formInput} id="msg" name="Message" placeholder="Ali, I think you're a cool guy" required></textarea>
        </div>
        <div className={styles.submitContainer}>
          <input className={styles.submitButton} type="submit" />
        </div>
      </form>
      <Footer></Footer>
    </div>
  )
}

export default Contact


