import React from 'react'
import css from './Header.module.css'
import Input from '../../../UI/input/Input'
import logo from '../../../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa'

function Header() {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <span>Amazon</span>
            </div>
            <div className={css.right}>
                <div className={css.menu}></div>
                <ul className={css.menu}>
                    <li>collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>
            {/* <Input type="text" /> */}
            <input type="text" className={css.search} placeholder="Search" />
            <FaShoppingCart />

        </div>
    )
}

export default Header