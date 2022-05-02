import React from 'react';
// css
import './Wishlist.css';
//context
import { useWishlist } from 'context/addToWishlist';
// local components
import { NoData, WishlistCard } from 'components/exportComponents';

function Wishlist() {
    const [{ wishlistItems },] = useWishlist();
    let isWishlistEmpty = wishlistItems.length === 0;
    return (
        <div className='wishlist'>
            <header>
                <h3 className="wishlist-heading">My Wishlist</h3>
            </header>

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