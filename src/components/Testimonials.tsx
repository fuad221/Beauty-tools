import React from 'react';
import { TestimonialsData } from '../data/testimonials';
import { useAppSelector } from '../store/hooks';
import css from './Testimonials.module.css';
import Hero from '../assets/testimonialHero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Testimonials = () => {
    const isDark = useAppSelector((state) => state.darkMode.isDarkMode)
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and bly. Exercise joy man children rejoiced.</span>
                </div>
                <img src={Hero} alt="" />

                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>

            <div className={css.reviews}>Reviews</div>

            <div className={css.carousel}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCarousel}
                    breakpoints={{
                        856: {
                            slidesPerView: 3,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt="" />
                                <span style={{color: 'black'}}>{testimonial.comment}</span>
                                <hr />
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials