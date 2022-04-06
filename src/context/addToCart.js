import { createContext, useContext, useReducer } from "react";
import cartReducer, { initialCart } from "reducers/cartReducer";

const CartContext = createContext();

const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    let cart = useReducer(cartReducer, initialCart)
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider, useCart }