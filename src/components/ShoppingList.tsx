import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { cartActions, CartItem } from '../store/CartSlice';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import css from './ShoppingList.module.css'
import PopUp from '../UI/PopUp';

interface shoppingListProps {
    // isOpen: boolean;
    // onClose: () => void;
}

const ShoppingList = ({ }: shoppingListProps) => {
    // const ShoppingList = ({ isOpen, onClose }: shoppingListProps) => {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(state => state.cart.cartItems);

    const IsOpenShopping = useAppSelector(state => state.cart.isOpen)
    const closeShopping = () => {
        dispatch(cartActions.closeSoppingList())
    }


    const total = cartItems.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity
        return acc + itemTotal
    }, 0);

    const AddItem = (cartItem: CartItem) => {
        dispatch(cartActions.addRemoveItem(cartItem))
    }

    return (
        <div>
            {/* <PopUp open={isOpen} onClose={onClose} > */}
            <PopUp open={IsOpenShopping} onClose={closeShopping} >

                {cartItems.map(item => (
                    <div>
                        <div className={css.ShoppingList}>
                            <img src={item.img} className={css.shoppingImg} />
                            <span>{item.name}</span>
                            <span>{item.quantity}</span>
                            <span>{item.price * item.quantity}</span>
                            <IconButton onClick={() => AddItem({ ...item, quantity: 1 })}>+</IconButton>
                            <IconButton onClick={() => AddItem({ ...item, quantity: -1 })}>-</IconButton>
                        </div>

                    </div >
                ))}
                <div className={css.total}>
                    <h3>total: {total}</h3>
                    <Button className={css.buy_now}>Buy now</Button>
                </div>
            </PopUp >
        </div >
    )
}

export default ShoppingList