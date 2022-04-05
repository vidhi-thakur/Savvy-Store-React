const { CartProvider } = require("./addToCart")
const { WishlistProvider } = require("./addToWishlist")

const Provider = ({ children }) => {
    // import all the context provider here!
    return (
        <CartProvider>
            <WishlistProvider>
                {children}
            </WishlistProvider>
        </CartProvider>
    )
}

export default Provider