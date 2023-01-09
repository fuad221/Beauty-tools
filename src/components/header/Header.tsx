import React, {useState} from 'react';
import { useAppSelector } from '../../store/hooks';
import mc from './Header.module.css';
import logo from '../../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import {GoThreeBars} from 'react-icons/go';
import Toggle from '../toggle/Toggle';
import Input from '../../UI/input/Input'


function Header() {
    const isDark = useAppSelector((state) => state.darkMode.isDarkMode)

    return (
        <div className={mc.container} style={{ color: isDark ? 'white' : '' }}>
            <div className={mc.logo}>
                <img src={logo} alt="" />
                <span>Amazon</span>
                <Toggle />
            </div>
            <div className={mc.right}>
                <div className={mc.bars}>
                    <GoThreeBars />
                </div>
                <div className={mc.menu}></div>
                <ul className={mc.menu}>
                    <li>collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>
            <Input type="text" className={mc.search} placeholder="Search" />
            <FaShoppingCart className={mc.shopping}/>

        </div>
    )
}

export default Header