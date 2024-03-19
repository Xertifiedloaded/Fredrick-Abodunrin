import React from 'react'
import styles from '../style-module/singleArticle.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import back from '../assets/back-button.png'
import xerty from '../assets/ai.jpeg'
import { articleData } from '../utils'

export default function SingleArticle() {
    const { id, title } = useParams()
    const article = articleData.find(article => article.id.toString() === id && article.title === title);

    if (!article) {
        return <div>Article not found.</div>;
    }

const navigate =useNavigate()
const handleNavigate=()=>{
    navigate("/articles")
}
    return (
        <>
            <section className={styles.single}>
                <p className={styles.clock}>{article.publicationDate}</p>
                <div onClick={handleNavigate} className={styles.navigation}>
                    <img  src={back} alt="" />
                </div>
                <div className={styles.details}>
                    <div className={styles.articlesss}>
                        <h1>{article.title}</h1>
                        <p>{article.headline}</p>
                        {article.author ? (
                            <p className={styles.author}> {article.author}</p>
                        ) : (
                            <p> Fredrick Abodunrin</p>
                        )}
                    </div>
                    <div className={styles.image_container}>
                        {article.image ? (
                            <img src={article.image} alt={article.title} />
                        ) : (
                            <img src={xerty} alt="image" />
                        )}
                    </div>
                </div>
                <div className={styles.content}>
                    <p>{article.content}</p>
                </div>

            </section>
        </>
    )
}
