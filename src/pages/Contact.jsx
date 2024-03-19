import React from 'react'
import styles from '../style-module/contact.module.css'
import call from '../assets/call.svg'
import email from '../assets/email.svg'
import mail from '../assets/amil.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import { contactOptions } from '../utils'
import { Link } from 'react-router-dom'
export default function Contact() {
    const handleOptionClick = (link) => {
        window.location.href = link;
      };
    
    return (
        <>
            <section className={styles.contact}>
                <h1>
                    Lets Connect
                </h1>
                <p>Thank you for your interest in getting in touch with me.I welcome your feedback, questions, and suggestions. If you have any specific question or comment feel free to contact via the provided channels below.</p>
                <ul className={styles.social_connection}>
                    {
                        contactOptions.map((contact, index) => {
                            return (
                                <Link  onClick={() => handleOptionClick(option.link)}  key={index} to={contact.link} className={styles.social_List}>
                                    <img src={contact.image} alt="" />
                                    <span>{contact.label}</span>
                                </Link>
                            )
                        })
                    }

                </ul>
            </section>
        </>
    )
}
