import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import styles from '../style-module/layout.module.css'
import Footer from '../components/Footer'
export default function Layout() {
    return (
        <>

            <div className={styles.layout} >
                <Header />
                <Outlet />
                <Footer/>
            </div>
        </>
    )
}
