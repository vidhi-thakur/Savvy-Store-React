export const initialCart = {
    cartItems: [],
    totalAmount: 0
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        case 'REMOVE_FROM_CART':
            let newCartItems = state.cartItems.filter(cart => cart.id !== action.payload.id)
            return { ...state, cartItems: newCartItems }
        default:
            return { ...state }
    }
}

export default cartReducer