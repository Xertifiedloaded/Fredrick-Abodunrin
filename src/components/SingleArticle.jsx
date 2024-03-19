import React, { useState, useEffect } from 'react';
import styles from '../style-module/singleArticle.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import back from '../assets/back-button.png';
import xerty from '../assets/ai.jpeg';

export default function SingleArticle() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();
   
    useEffect(() => {
        const apiUrl = `${import.meta.env.VITE_ARTICLE_BY_ID}/${id}`
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setArticle(data.article))

            .catch(error => console.error('Error fetching article:', error));
    }, [id]);
    // console.log(article);
    const handleNavigate = () => {
        navigate("/articles");
    };

    if (!article) {
        return  <div style={{display:"grid",placeItems:"center",height:"100vh"}}>
        <p style={{fontSize:"40px"}}>Loading...</p>
    </div>
    }

    return (
        <>
            <section className={styles.single}>
                <p className={styles.clock}>{article.createdAt}</p>
                <div onClick={handleNavigate} className={styles.navigation}>
                    <img src={back} alt="" />
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
    );
}