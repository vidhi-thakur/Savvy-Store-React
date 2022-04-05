export const initialCart = {
    cartItems: [],
    totalAmount: 0
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { cartItems: [...state.cartItems, action.payload], totalAmount: state.totalAmount + action.payload.price }
        case 'REMOVE_FROM_CART':
            let newCartItems = state.cartItems.filter(cart => cart.id !== action.payload.id)
            return { cartItems: newCartItems, totalAmount: state.totalAmount - action.payload.price }
        default:
            return { ...state }
    }
}

export default cartReducer