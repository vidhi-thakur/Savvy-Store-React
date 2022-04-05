export const initialCart = {
    cartItems: [],
    totalAmount: 0
}

function cartReducer(state, {type, payload}) {
    switch (type) {
        case 'ADD_TO_CART':
            return { cartItems: [...state.cartItems, payload], totalAmount: state.totalAmount + payload.price }
        case 'REMOVE_FROM_CART':
            let newCartItems = state.cartItems.filter(cart => cart.id !== payload.id)
            return { cartItems: newCartItems, totalAmount: state.totalAmount - payload.price }
        default:
            return { ...state }
    }
}

export default cartReducer