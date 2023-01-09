import React from 'react';
import { FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import css from './Hero.module.css';
import hero from '../../assets/hero.png';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { duration: 3, type: "spring" };
    const mobile = window.innerWidth <= 768 ? true : false;

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
                <motion.div
                    initial={{ bottom: !mobile? "1rem" : undefined }}
                    whileInView={{ bottom: "0rem" }}
                    transition={transition}
                    className={css.blueCircle}
                ></motion.div>

                <motion.img
                    initial={{ bottom: !mobile ? "-2rem" : undefined }}
                    transition={transition}
                    src={hero}
                    alt=""
                    width={600}
                />
                <motion.div
                    initial={{ right: !mobile ? "4%" : undefined}}
                    whileInView={{ right: !mobile? "2%": undefined }}
                    transition={transition}
                    className={css.cart2}
                >
                    <FaShoppingBag />
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <FaArrowRight />
                        </div>
                    </div>
                </motion.div>
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