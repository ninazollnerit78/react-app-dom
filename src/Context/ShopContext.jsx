import React, { useState } from "react";
import { createContext } from "react";
import all_products from "../Components/Assets/all_products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const getFollow = () => {
    let follow = {};
    for(let index = 0; index < all_products.length + 1; index++) {
        follow[index] = 0;
    }
    return follow;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);
    const [followItems, setFollowItems] = useState(getFollow);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }

    const addToFollow = (itemId) => {
        setFollowItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const removeFromFollow = (itemId) => {
        setFollowItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems, followItems, addToFollow, removeFromFollow};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;