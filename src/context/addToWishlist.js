import { createContext, useContext, useReducer } from "react";
import wishlistReducer, { initialWishlist } from "reducers/wishlistReducer";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({ children }) => {
    let wishlist = useReducer(wishlistReducer, initialWishlist)
    return (
        <WishlistContext.Provider value={wishlist}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistContext, WishlistProvider, useWishlist }