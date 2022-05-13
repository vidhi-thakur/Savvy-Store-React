import React from 'react';
// context
import { useCart } from 'context/addToCart';
import { useWishlist } from 'context/addToWishlist';

function WishlistCard({ id, title, author, rating, description, price, productImage, count }) {
    const [, dispatchWishlist] = useWishlist();
    const [, dispatchCart] = useCart();

    const moveToCart = () => {
        dispatchWishlist({
            type: "REMOVE_FROM_WISHLIST",
            payload: {
                id
            }
        });
        dispatchCart({
            type: "ADD_TO_CART",
            payload: {
                id,
                title,
                author,
                rating,
                description,
                price,
                productImage,
            }
        })
    }
    return (
        <div className="card card-vertical">
            <div className="badge-container card-customBadge">
                <i className="fas fa-heart badges icon-badge badge-round"></i>
            </div>
            {count > 1 && <span className="badge badge-primary-contained card-customBadge-horizontal">{count} Items</span>}
            <img loading="lazy" className="card-image-horizontal"
                src={productImage}
                alt={title}
            />
            <div className="card-textContainer">
                <h3 className="pb-1">{title}</h3>
                <p className="pb-1">By {author}</p>
                <p className='card-productInfo'><strong>Rs. {price}</strong> <span>{rating}⭐</span></p>
                <p>{description}</p>
            </div>
            <div className="card-btnContainer">
                <button onClick={moveToCart} className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> move to cart</button>
            </div>
        </div>
    )
}

export { WishlistCard }