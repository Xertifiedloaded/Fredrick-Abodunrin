import React from 'react'
import styles from '../style-module/header.module.css'
import { navList } from '../utils'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        {
                            navList.map((items,index) => {
                                return (
                                    <>
                                        <li key={index}>
                                            <NavLink to={items.path}>
                                                {items.text}
                                            </NavLink>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>

        </>
    )
}
