import React, { useState } from 'react';
import styles from '../style-module/article.module.css';
import { articleData } from '../utils';
import { Link } from 'react-router-dom';
import chevron from '../assets/chevron-left.svg'
export default function Article() {
    const [articles, setArticles] = useState(articleData);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(3);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
        pageNumbers.push(i);
    }


    const maxPagesToShow = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(
        Math.ceil(articles.length / articlesPerPage),
        startPage + maxPagesToShow - 1
    );

    if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return (
        <>
            <article>
                <h1>Articles</h1>
                <p>Blog Articles</p>
                <div className={styles.article}>
                    {currentArticles.map((article) => {
                        return (
                            <div key={article.id} className={styles.blog}>
                                <p>{article.publicationDate}</p>
                                <div className={styles.articleContent}>
                                    <h3>{article.title}</h3>
                                    <p>{article.headline}</p>
                                    <Link to={`/article/${article.id}/${article.title}`}>Read more <img style={{width:'10px',height:"10px"}} src={chevron} alt="" /></Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
           
                <div className={styles.pagination}>
       
                    <button
                    className='left'
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </button>
           
                    {pageNumbers.slice(startPage - 1, endPage).map((number) => (
                        <button
                        
                            key={number}
                            onClick={() => paginate(number)}
                            style={{width:"30px",height:"30px",borderRadius:"100%",border:"none"}}
                            className={number === currentPage ? styles.active_number : ''}
                        >
                            {number}
                        </button>
                    ))}
             
                    <button
                       className='right'
                        onClick={() =>
                            paginate(Math.min(
                                Math.ceil(articles.length / articlesPerPage),
                                currentPage + 1
                            ))
                        }
                        disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
                    >
                        {'>'}
                    </button>
                </div>
            </article>
        </>
    );
}