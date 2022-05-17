import React, { useState, useEffect } from 'react'
import './CartManagement.css'
import { useCart } from 'context/addToCart'
import { Alert, CartManagementCard, NoData, PlaceOrder } from 'components/exportComponents';

function CartManagement() {
    const [{ cartItems },] = useCart();
    const initialProductStatus = {
        content: null,
        type: null
    }
    const [productStatus, setproductStatus] = useState(initialProductStatus)
    useEffect(() => {
        if (productStatus.content && productStatus.type) {
            setTimeout(() => setproductStatus(initialProductStatus), 1500)
        }
    }, [productStatus])

    let isCartEmpty = cartItems.length === 0;
    return (
        <div className='cart-management'>
            <header>
                <h3 className="cart-heading">My Cart({cartItems.length})</h3>
            </header>
            {productStatus.content && productStatus.type && <Alert type={productStatus.type} content={productStatus.content} />}
            <section className="cart">
                {!isCartEmpty ? <div className="cart-items p-1">
                    {cartItems.map((cartItem, i) => <CartManagementCard
                        id={cartItem.id}
                        key={`${cartItem.id}-${i}`}
                        title={cartItem.title}
                        rating={cartItem.rating}
                        description={cartItem.description}
                        productImage={cartItem.productImage}
                        author={cartItem.author}
                        price={cartItem.price}
                        count={cartItem.count}
                        setproductStatus={setproductStatus}
                    />)}
                </div> : <NoData componentName="cart" />}
                {!isCartEmpty && <PlaceOrder />}
            </section>

        </div>
    )
}

export { CartManagement }