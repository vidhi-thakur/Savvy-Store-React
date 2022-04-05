import React from 'react'
// css
import './CartManagement.css'
// local components
import CartManagementCard from 'components/cart-management/cart-management-card/CartManagementCard'
import PlaceOrder from 'components/cart-management/cart-management-RHS/PlaceOrder'
import { cartManagement } from 'backend/db/cartManagement'
// context
import { useCart } from 'context/addToCart'

function CartManagement() {
    const [{ cartItems }, ] = useCart();

    let isCartEmpty = cartItems.length === 0;
    return (
        <div className='cart-management'>
            <header>
                <h3 className="cart-heading">My Cart(2)</h3>
            </header>

            <section className="cart">
                {!isCartEmpty ? <div className="cart-items p-1">
                    {cartItems.map(cartItem => <CartManagementCard
                        id={cartItem.id}
                        key={cartItem.id}
                        title={cartItem.title}
                        rating={cartItem.rating}
                        description={cartItem.description}
                        productImage={cartItem.productImage}
                        author={cartItem.author}
                        price={cartItem.price}
                    />)}
                </div>: <div className="empty-cart">
                    <h1>Your cart is empty!</h1>
                </div>}
                {!isCartEmpty && <PlaceOrder />}
            </section>

        </div>
    )
}

export { CartManagement }