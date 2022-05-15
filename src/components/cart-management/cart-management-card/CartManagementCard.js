import React from 'react';
// context
import { useCart } from 'context/addToCart';
import { useWishlist } from 'context/addToWishlist';

function CartManagementCard({ id, title, author, rating, description, price, productImage, count }) {
    const [, dispatchCart] = useCart();
    const [, dispatchWishlist] = useWishlist()

    const removeItemFromCart = () => {
        dispatchCart({
            type: "REMOVE_FROM_CART",
            payload: {
                id,
                price,
            }
        })
    }

    const moveToWishlist = () => {
        removeItemFromCart();
        dispatchWishlist({
            type: "ADD_TO_WISHLIST",
            payload: {
                title,
                author,
                rating,
                description,
                price,
                productImage,
                id
            }
        })
    }
    return (
        <div className="card card-horizontal">
            {count > 1 && <span className="badge badge-primary-contained card-customBadge-horizontal">{count} Items</span>}
            <img loading="lazy" className="card-image-vertical sm-img-size"
                src={productImage}
                alt={title}
            />
            <div className="br-inherit flex-1">
                <div className="card-textContainer br-inherit">
                    <h3 className="pb-1">{title}</h3>
                    <p className="pb-1">By {author}</p>
                    <p className='card-productInfo'><strong>Rs. {price}</strong> <span>{rating}⭐</span></p>
                    <p>{description}</p>
                </div>
                <div className="card-btnContainer br-inherit">
                    <button onClick={removeItemFromCart} className="btn btn-primary-outlined"><i className="fas fa-cart-plus  mr-05"></i> remove from
                        cart</button>
                    <button onClick={moveToWishlist} className="btn btn-primary-outlined">move to wishlist</button>
                </div>
            </div>
        </div>
    )
}

export { CartManagementCard }