export const initialCart = {
    cartItems: [],
    totalAmount: 0,
    numOfItemsinCart: 0
}

function cartReducer(state, { type, payload }) {
    const itemPresent = state.cartItems.filter(item => item.id === payload.id)
    switch (type) {
        case 'ADD_TO_CART':
            if (itemPresent.length > 0) {
                const newItems = state.cartItems.filter(item => item.id !== payload.id)
                return { cartItems: [...newItems, { ...payload, count: itemPresent[0].count + 1 }], numOfItemsinCart: state.numOfItemsinCart + 1, totalAmount: state.totalAmount + payload.price }
            } else {
                return { cartItems: [...state.cartItems, { ...payload, count: 1 }], numOfItemsinCart: state.numOfItemsinCart + 1, totalAmount: state.totalAmount + payload.price }
            }
        case 'REMOVE_FROM_CART':
            let newCartItems = state.cartItems.filter(list => list.id !== payload.id)
            if (itemPresent.length > 0 && itemPresent[0].count === 1) {
                return { cartItems: newCartItems, numOfItemsinCart: state.numOfItemsinCart - 1, totalAmount: state.totalAmount - payload.price }
            } else if (itemPresent.length > 0 && itemPresent[0].count > 1) {
                return {
                    cartItems: [...newCartItems, {
                        ...itemPresent[0],
                        count: itemPresent[0].count - 1
                    }],
                    numOfItemsinCart: state.numOfItemsinCart - 1,
                    totalAmount: state.totalAmount - payload.price
                }
            }
        default:
            return { ...state }
    }
}

export default cartReducer