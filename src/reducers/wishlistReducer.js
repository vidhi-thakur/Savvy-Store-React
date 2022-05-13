export const initialWishlist = {
    wishlistItems: [],
    numOfItemsinWishlist: 0
}

function wishlistReducer(state, { type, payload }) {
    const itemPresent = state.wishlistItems.filter(item => item.id === payload.id)
    switch (type) {
        case 'ADD_TO_WISHLIST':
            if (itemPresent.length > 0) {
                const newItems = state.wishlistItems.filter(item => item.id !== payload.id)
                return { wishlistItems: [...newItems, { ...payload, count: itemPresent[0].count + 1 }], numOfItemsinWishlist: state.numOfItemsinWishlist + 1 }
            } else {
                return { wishlistItems: [...state.wishlistItems, { ...payload, count: 1 }], numOfItemsinWishlist: state.numOfItemsinWishlist + 1 }
            }
        case 'REMOVE_FROM_WISHLIST':
            let newWishlistItems = state.wishlistItems.filter(list => list.id !== payload.id)
            if (itemPresent.length > 0 && itemPresent[0].count === 1) {
                return { wishlistItems: newWishlistItems, numOfItemsinWishlist: state.numOfItemsinWishlist - 1 }
            } else if (itemPresent.length > 0 && itemPresent[0].count > 1) {
                return {
                    wishlistItems: [...newWishlistItems, {
                        ...itemPresent[0],
                        count: itemPresent[0].count - 1
                    }],
                    numOfItemsinWishlist: state.numOfItemsinWishlist - 1
                }
            }
        default:
            return { ...state }
    }
}

export default wishlistReducer