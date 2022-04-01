import React from 'react'

// css
import './CartManagement.css'

// local components
import CartManagementCard from '../../components/cart-management/cart-management-card/CartManagementCard'
import PlaceOrder from '../../components/cart-management/cart-management-RHS/PlaceOrder'

function CartManagement() {
    return (
        <div>
            <header>
                <h3 className="cart-heading">My Cart(2)</h3>
            </header>

            <section className="cart">
                <div className="cart-items p-1">
                    <CartManagementCard />
                    <CartManagementCard />
                </div>
                <PlaceOrder />
            </section>

        </div>
    )
}

export default CartManagement