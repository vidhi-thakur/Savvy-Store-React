import React from 'react'

// css
import './CartManagement.css'

// local components
import CartManagementCard from '../../components/cart-management/cart-management-card/CartManagementCard'
import PlaceOrder from '../../components/cart-management/cart-management-RHS/PlaceOrder'
import { cartManagement } from '../../backend/db/cartManagement'

function CartManagement() {
    return (
        <div>
            <header>
                <h3 className="cart-heading">My Cart(2)</h3>
            </header>

            <section className="cart">
                <div className="cart-items p-1">
                    {cartManagement.map(cartItem => <CartManagementCard
                        key={cartItem._id}
                        title={cartItem.title}
                        rating={cartItem.rating}
                        description={cartItem.description}
                        cartImage={cartItem.cartImage}
                        author={cartItem.author}
                        price={cartItem.price}
                    />)}
                </div>
                <PlaceOrder />
            </section>

        </div>
    )
}

export default CartManagement