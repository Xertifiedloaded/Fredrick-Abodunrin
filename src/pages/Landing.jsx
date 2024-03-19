import React from 'react'
import About from '../components/About'
import styles from '../style-module/landing.module.css'
export default function Landing() {
    return (
        <>
            <div className={styles.landing}>
                <About />
            </div>
        </>
    )
}
