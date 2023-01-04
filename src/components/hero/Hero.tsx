import React from 'react'
import { FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import css from './Hero.module.css';
import hero from '../../assets/hero.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className={css.container}>
            {/* ------------------------------left side------- */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin Protecting cream</span>
                <div className={css.text2}>
                <span>Trendy Collection</span>
                    <span>Seedily Say has suitable disposal and boy. Exrcise</span>
                </div>
            </div>
            {/* ------------------------------meddle side img------- */}

            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={hero} alt="" width={600} />
                <div className={css.cart2}>
                    <FaShoppingBag />

                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------right side img------- */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100K</span>
                    <span>Happy Customers</span>
                </div>
            </div>

        </div>
    )
}

export default Hero