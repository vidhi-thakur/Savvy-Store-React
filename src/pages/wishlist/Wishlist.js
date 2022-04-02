import React from 'react';
import WishlistCard from '../../components/wishlist/wishlistCard/WishlistCard';

// css
import './Wishlist.css'

function Wishlist() {
    return (
        <div>
            <header>
                <h3 className="wishlist-heading">My Wishlist</h3>
            </header>

            <section className="wishlisted-items">
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />  
                <WishlistCard />               
            </section>
        </div>
    )
}

export default Wishlist