import { NextPage } from "next";
import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from '../styles/Resume.module.css'




const Resume: NextPage = () => {

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.resumeContainer}>
        <div className={styles.resumePageOne}>
          <img src="page1.jpg" alt="Page 1 of my resume" />
        </div>
        <div className={styles.resumePageTwo}>
          <img src="page2.jpg" alt="Page 1 of my resume" />
        </div>
        <div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Resume


