import React from 'react';
import { wishlist } from 'backend/db/wishlist';
import WishlistCard from 'components/wishlist/wishlistCard/WishlistCard';
// css
import './Wishlist.css';

function Wishlist() {
    return (
        <div>
            <header>
                <h3 className="wishlist-heading">My Wishlist</h3>
            </header>

            <section className="wishlisted-items">
                {wishlist.map(list => <WishlistCard
                    key={list._id}
                    title={list.title}
                    rating={list.rating}
                    description={list.description}
                    wishlistImage={list.wishlistImage}
                    author={list.author}
                    price={list.price}
                />)}
            </section>
        </div>
    )
}

export { Wishlist }