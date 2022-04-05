import { createContext, useContext, useReducer } from "react";
import wishlistReducer, { initialWishlist } from "reducers/wishlistReducer";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({ children }) => {
    return (
        <WishlistContext.Provider value={useReducer(wishlistReducer, initialWishlist)}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistContext, WishlistProvider, useWishlist }