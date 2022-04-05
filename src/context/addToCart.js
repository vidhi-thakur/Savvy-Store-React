import { createContext, useContext, useReducer } from "react";
import cartReducer, { initialCart } from "reducers/cartReducer";

const CartContext = createContext();

const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    return (
        <CartContext.Provider value={useReducer(cartReducer, initialCart)}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider, useCart }