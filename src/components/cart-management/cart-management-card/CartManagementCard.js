import React from 'react';
// context
import { useCart } from 'context/addToCart';

function CartManagementCard({ id, title, author, rating, description, price, productImage, }) {
    const [, dispatch] = useCart();

    const removeItemFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
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
            <span className="badge badge-primary-contained card-customBadge-horizontal">Best seller</span>
            <img loading="lazy" className="card-image-vertical"
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
                    <button className="btn btn-primary-outlined">move to wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default CartManagementCard