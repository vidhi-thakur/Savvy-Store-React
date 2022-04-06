import React from 'react'
// css
import './CartManagement.css'
// local components
import CartManagementCard from 'components/cart-management/cart-management-card/CartManagementCard'
import PlaceOrder from 'components/cart-management/cart-management-RHS/PlaceOrder'
import NoData from 'components/UIcomponents/noDataPage/NoData'
// context
import { useCart } from 'context/addToCart'

function CartManagement() {
    const [{ cartItems },] = useCart();

    let isCartEmpty = cartItems.length === 0;
    return (
        <div className='cart-management'>
            <header>
                <h3 className="cart-heading">My Cart({cartItems.length})</h3>
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
                </div> : <NoData componentName="cart" />}
                {!isCartEmpty && <PlaceOrder />}
            </section>

        </div>
    )
}

export { CartManagement }