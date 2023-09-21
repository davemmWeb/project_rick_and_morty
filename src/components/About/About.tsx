import { Link } from 'react-router-dom'
import forme from "../../img/forMe.jpeg"
import styles from "../About/About.module.css"

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>About me</h1>
        <p>Hi, I'm David - Software Engineer in Colombia.
          <br />
          <br />
          My name is David Duarte, software engineer and fullstack developer with more
          than 4 years of experience in web application development solutions, advanced
          knowledge in Html, Css, JavaScript, Vue, Vuex, Next, Node, Express, React, Redux
          I also have With experience in relational databases MySQL, PostgreSQL, Sequelize
          and management of GitHub version controllers. I focus on solving problems and I
          love teamwork. I also like to collaborate on interface design.
        </p>
        <Link to={"https://portfolio-davemmweb.vercel.app/"}><button>PORTFOLIO</button></Link>
      </div>
      <div className={styles.imgContainer}>
        <img src={forme} alt="forMe" />
      </div>
    </div>
  )
}
