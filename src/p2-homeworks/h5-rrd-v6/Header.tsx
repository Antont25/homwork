import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './header.module.css'

function Header() {
    return (
        <div className={style.leftSidebar}>
            <div className={style.show}>Menu</div>
            <div className={style.leftSidebarMenu}>
                <NavLink to={'pre-junior'} className={style.item}>PRE-JUNIOR</NavLink>
                <NavLink to={'junior'} className={style.item}>JUNIOR</NavLink>
                <NavLink to={'junior-plus'} className={style.item}>JUNIOR-PLUS</NavLink>
            </div>
        </div>
    )
}

export default Header
