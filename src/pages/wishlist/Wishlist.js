import React, { useEffect, useState } from 'react';
// css
import './Wishlist.css';
//context
import { useWishlist } from 'context/addToWishlist';
// local components
import { Alert, NoData, WishlistCard } from 'components/exportComponents';

function Wishlist() {
    const [{ wishlistItems },] = useWishlist();
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
    let isWishlistEmpty = wishlistItems.length === 0;
    return (
        <div className='wishlist'>
            <header>
                <h3 className="wishlist-heading">My Wishlist</h3>
            </header>

            {productStatus.content && productStatus.type && <Alert type={productStatus.type} content={productStatus.content} />}
            {!isWishlistEmpty ? <section className="wishlisted-items">
                {wishlistItems.map(list => <WishlistCard
                    id={list.id}
                    key={list.id}
                    title={list.title}
                    rating={list.rating}
                    description={list.description}
                    productImage={list.productImage}
                    author={list.author}
                    price={list.price}
                    count={list.count}
                    setproductStatus={setproductStatus}
                />)}
            </section> : <NoData
                componentName="wishlist"
                CTAtext="go to cart"
                CTAlink="/cart-management"
            />}
        </div >
    )
}

export { Wishlist }