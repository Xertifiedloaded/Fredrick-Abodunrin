import React from 'react'
import styles from '../style-module/about.module.css'
import fred from '../assets/freed.jpg'
import { Link } from 'react-router-dom'
const cvLink='https://docs.google.com/document/d/1fTdkszBH93W0psDRjwBxFvYyjQEPO2Y5YVQlfdZX3Kw/edit?usp=sharing'
export default function About() {
    return (
        <>
            <div className={styles.mySection}>
                <section className={styles.profile}>
                    <div className={styles.name_container}>
                        <h1>Fredrick Abodunrin</h1>
                        <p>Backend Software Engineer</p>
                        
                        <Link  to={cvLink} className={styles.glow}>
                            <button className={styles.button}>
                                View CV
                            </button>
                        </Link>
                    </div>
                    <div className={styles.proficiency}>
                        <div className={styles.group}>
                            <p>proficiency:</p>
                            <ul className={styles.proficiency_list}>
                                <li><strong>Programming Languages:</strong> Javascript, TypeScript</li>
                                <li><strong>Frameworks:</strong> Nodejs, Express, React</li>
                                <li><strong>Databases:</strong> MySQL, PostgreSQL, and MongoDB</li>
                                <li><strong>Version Control:</strong> Git, GitLab, GitHub, Bitbucket</li>
                                <li> <strong>Dev-Ops:</strong> Docker, Heroku</li>
                                <li> <strong>Soft Skills:</strong> Problem-Solving, Teamwork, Communication, Critical Thinking</li>
                                <li><strong> Project Management:</strong> Jira, Trello, Agile Methodologies</li>
                            </ul>
                        </div>

                        <div className={styles.image_Container}>
                            <img src={fred} alt="" />
                        </div>
                    </div>

                </section>

                <div className={styles.summary}>
                    <h4>Professional Summary</h4>
                    <p>I'm a curious software developer proficient in JavaScript, TypeScript, MongoDB, PostgreSQL, MySQL, Render, Heroku, and AWS. Passionate about creating innovative software solutions that meet people's needs. Seeking a role in a team of ambitious professionals dedicated to achieving the company's goals and success.</p>
                    <div className={styles.social}>
                        social
                    </div>
                </div>
            </div>

        </>
    )
}
