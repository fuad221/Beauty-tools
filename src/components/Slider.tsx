import React from 'react';
import Button from '../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { cartActions, CartItem } from '../store/CartSlice';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProducts } from '../data/products';
import IconButton from '../UI/IconButton';


const Slider = () => {
    const isMobile = window.innerWidth <= 600 ? true : false;

    const cart = useAppSelector(state => state.cart.cartItems)
    const dispatch = useAppDispatch();

    const addItemHandler = (cartItem: CartItem) => {
        dispatch(cartActions.addRemoveItem(cartItem))
    }

    const AddItem = (cartItem: CartItem) => {
        dispatch(cartActions.addRemoveItem(cartItem))
    }

    return (
        <div className="s-container">
            <Swiper
                modules={[Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
                loopFillGroupWithBlank={true}
                slidesPerView={isMobile? 2 : 3}
                spaceBetween={isMobile? 5: 40}
                slidesPerGroup={1}
                loop={true}
            >
                {SliderProducts.map((slide, i) => {
                    return (
                        <SwiperSlide>
                            <div className="left-s">
                                <div className="name">
                                    <span>{slide.name}</span>
                                    <span>{slide.detail}</span>
                                </div>
                                <span>{slide.price}$</span>
                                <div className='addIcon'>
                                    <Button onClick={() => addItemHandler({
                                        ...slide,
                                        quantity: 1,
                                    })}>Add </Button>
                                    <div className="plus">
                                        <IconButton onClick={() => AddItem({ ...slide, quantity: 1 })}>+</IconButton>
                                        <IconButton onClick={() => AddItem({ ...slide, quantity: -1 })}>-</IconButton>
                                    </div>
                                </div>
                            </div>

                            <img src={slide.img} alt="product" className="img-p" />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default Slider