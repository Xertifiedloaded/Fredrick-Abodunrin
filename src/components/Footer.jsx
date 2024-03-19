import React from 'react'
import styles from '../style-module/footer.module.css'
import { navList } from '../utils'
import { NavLink } from 'react-router-dom'
export default function Footer() {
    const getYear = new Date().getFullYear()
    return (
        <>
            <footer>

                <ul>

                    {
                        navList.map((footer) => {
                            return (
                                <li key={footer.id}>
                                    <NavLink to={footer.path}>
                                        {footer.text}
                                    </NavLink>
                                </li>
                            )
                        })
                    }

                </ul>
                <div>
                    © {getYear} Fredrick Abodunrin. All Rights Reserved.
                </div>
            </footer>
        </>
    )
}
