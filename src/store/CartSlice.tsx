import React,{useState} from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: string,
    name: string,
    detail: string,
    price: number,
    img: string
    quantity: number,
}

type CartState = {
    cartItems: CartItem[],
    isOpen: boolean,
}

const initialState: CartState = {
    cartItems: [],
    isOpen: false
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addRemoveItem(state, action: PayloadAction<CartItem>) {
            const { cartItems } = state

            const existItemIdx = cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
            if (existItemIdx > -1) {
                const cartItem = cartItems[existItemIdx]
                cartItem.quantity += action.payload.quantity;
                if (cartItem.quantity <= 0) cartItems.splice(existItemIdx, 1)
            } else {
                cartItems.push(action.payload)
            }
        },
        clearCart(state) {
            state.cartItems = []
        },

        openSoppingList(state){
            state.isOpen = true
        },
        closeSoppingList(state){
            state.isOpen = false
        }




    }
})

export const cartActions = CartSlice.actions
export default CartSlice;