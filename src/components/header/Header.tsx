import React, {useState} from 'react';
import { useAppSelector } from '../../store/hooks';
import css from './Header.module.css';
import logo from '../../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import {GoThreeBars} from 'react-icons/go';
import Toggle from '../toggle/Toggle';


function Header() {
    const isDark = useAppSelector((state) => state.darkMode.isDarkMode)

    return (
        <div className={css.container} style={{ color: isDark ? 'white' : '' }}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <span>Amazon</span>
                <Toggle />
            </div>
            <div className={css.right}>
                <div className={css.bars}>
                    <GoThreeBars />
                </div>
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