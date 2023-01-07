import React from 'react'
import mc from './Footer.module.css';
import Logo from '../../assets/logo.png';
import { FaMailBulk, FaPhoneAlt, FaLocationArrow, FaSignInAlt, FaUserAlt, FaLinkedinIn } from 'react-icons/fa';
// import {HiLocationMarker} from '@heroicons/react/outline';

const Footer = () => {
    return (
        <div className={mc.cFooterWrapper}>
            <hr />
            <div className={mc.cFooter}>
                <div className={mc.logo}>
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                </div>
                <div className={mc.block}>
                    <div className={mc.detail}>
                        <span>Contact Us</span>
                        <span className={mc.pngLine}>
                            <FaLocationArrow className={mc.icon} />
                            <span>Bahnhofstr 20, 22880 Wedel</span>
                        </span>

                        <span className={mc.pngLine}>
                            {" "}
                            <FaPhoneAlt className={mc.icon} />
                            <a href="tel:352-306-4415">352-306-4415</a>
                        </span>

                        <span className={mc.pngLine}>
                            <FaMailBulk className={mc.icon} />
                            <a href="mailto:support@amazon.com ">
                                support@amazon.com
                            </a>
                        </span>

                    </div>
                </div>
                <div className={mc.block}>
                    <div className={mc.detail}>
                        <span>Account</span>
                        <span className={mc.pngLine}>
                            <FaSignInAlt className={mc.icon} />
                            Sign In
                        </span>
                    </div>
                </div>

                <div className={mc.block}>
                    <div className={mc.detail}>
                        <span>Company</span>
                        <span className={mc.pngLine}>
                            <FaUserAlt className={mc.icon} />
                            <a href="/about">
                                <p>About us</p>
                            </a>
                        </span>
                    </div>
                </div>

                <div className={mc.block}>
                    <div className={mc.detail}>
                        <span>Resources</span>
                        <span className={mc.pngLine}>
                            <FaLinkedinIn className={mc.icon} />
                            <p>Safety Privacy & Terms</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className={mc.copyRight}>
                <span>Copyright ©2022 by Amazon, Inc.</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer