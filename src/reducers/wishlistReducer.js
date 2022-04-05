export const initialWishlist = {
    wishlistItems: [],
}

function wishlistReducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_TO_WISHLIST':
            return { wishlistItems: [...state.wishlistItems, payload] }
        case 'REMOVE_FROM_WISHLIST':
            let newWishlistItems = state.wishlistItems.filter(cart => cart.id !== payload.id)
            return { wishlistItems: newWishlistItems }
        default:
            return { ...state }
    }
}

export default wishlistReducer