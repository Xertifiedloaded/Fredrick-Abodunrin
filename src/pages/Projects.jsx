import React, { useEffect } from 'react'
import styles from '../style-module/project.module.css'
import { projectData } from '../utils'
import chain from '../assets/link.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials=true
export default function Projects() {

    // useEffect(() => {
    //     fetchProjectData();
    // }, []);

    // const fetchProjectData = async () => {
    //     try {
    //         const response = await fetch('https://portfolio-fwd9.onrender.com/api/articles/get');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch project data');
    //         }
    //         const data = await response.json();
    //         console.log(data);
        
    //     } catch (error) {
    //         console.error('Error fetching project data:', error);
    //     }
    // };
    return (
        <>
            <section className={styles.projects}>
                <h1>
                    Developed Projects
                </h1>
                <div className={styles.all}>
                    <button>
                        <Link style={{color:"bla"}} to='https://github.com/FredAbod'>
                            View All Projects
                        </Link>
                    </button>
                </div>
                <div className={styles.card_container}>
                    {
                        projectData.map((project) => {
                            return (
                                <div key={project.id} className={styles.card}>
                                    <div className={styles.card_Image_Container}>
                                        <img src={project.icon} alt="" />
                                    </div>
                                    <div className={styles.content}>
                                        <h3>{project.title}</h3>
                                        <p>{project.content}</p>
                                    </div>
                                    <div className={styles.navigate}>
                                        <img src={chain} alt="" />
                                        <Link to={project.github}>
                                            Github
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>

        </>
    )
}
