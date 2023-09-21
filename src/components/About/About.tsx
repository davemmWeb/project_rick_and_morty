import React from 'react'
import styles from "../About/About.module.css"
import forme from "../../img/forMe.jpeg"
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>About me</h1>
        <p>Hi, I'm David - Software Engineer in Colombia.
          <br/>
          <br/>         
          I am a full stack developer with experience in Javascript, 
          technologies like React, Node, Redux, mySQL...

          I am passionate about new challenges in which you can interact
           with new people and learn from others, I also really like 
           sharing my knowledge with others, I consider myself a good 
           tutor when it comes to teaching...
        </p>
        <Link><button>PORTFOLIO</button></Link>
      </div>
      <div className={styles.imgContainer}>
        <img src={forme} alt="forMe" />
      </div>
    </div>
  )
}
