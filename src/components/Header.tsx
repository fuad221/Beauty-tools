import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import mc from './Header.module.css';
import logo from '../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import Toggle from './toggle/Toggle';
import Input from '../UI/Input'
import ShoppingList from './ShoppingList';
import { cartActions } from '../store/CartSlice';


function Header() {
    const dispatch = useAppDispatch()
    const isDark = useAppSelector((state) => state.darkMode.isDarkMode);
    const [showMenu, setShowMenu] = useState(true);

    // with SetState -1
    // const [isOpen, setIsOpen] = useState(false);
    // const openShopping = () => setIsOpen(true)
    // const closeShopping = () => setIsOpen(false)

    const openShopping = () => {
        dispatch(cartActions.openSoppingList())
    }

    const toggleMenu = () => setShowMenu((prev) => !prev)


    return (
        <div className={mc.container} style={{ color: isDark ? 'white' : '' }}>
            <div className={mc.logo}>
                <img src={logo} alt="" />
                <span>Amazon</span>
                <Toggle />
            </div>
            <div className={mc.right}>
                <div className={mc.bars} onClick={toggleMenu}>
                    <GoThreeBars />
                </div>
                <ul className={mc.menu} style={{ display: showMenu ? 'inherit' : 'none' }}>
                    <li>collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>
            <Input type="text" className={mc.search} placeholder="Search" />

            {/* <button onClick={openShopping}> */}
            <FaShoppingCart className={mc.shopping} onClick={openShopping} />

            {/* </button> */}

            {/* <ShoppingList isOpen={isOpen} onClose={closeShopping} /> with setState -2*/}
            <ShoppingList />



        </div>
    )
}

export default Header