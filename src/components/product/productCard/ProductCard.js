import React from 'react';
// css
import './ProductCard.css'
// context
import { useCart } from 'context/addToCart';
import { useWishlist } from 'context/addToWishlist';
import { Link } from 'react-router-dom';

function ProductCard({ id, title, author, rating, description, price, productImage }) {
    const [, dispatchCart] = useCart();
    const [, dispatchWishlist] = useWishlist();

    const addItemToCart = () => {
        dispatchCart({
            type: "ADD_TO_CART",
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

    const addItemToWishlist = () => {
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
        <div className="card card-vertical">
            <img loading="lazy" className="card-image-horizontal"
                src={productImage}
                alt={title}
            />
            <Link to={`/product/${id}`}>
                <div className="card-textContainer">
                    <h3 className="pb-1">{title}</h3>
                    <p className="pb-1">By {author}</p>
                    <p className='card-productInfo'><strong>Rs. {price}</strong> <span>{rating}⭐</span></p>
                    <p>{description}</p>
                </div>
            </Link>
            <div className="card-btnContainer">
                <button onClick={addItemToCart} className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to
                    cart</button>
                <button onClick={addItemToWishlist} className="btn btn-primary-outlined mt-0"><i className="fas fa-cart-plus  mr-05"></i> add to
                    wishlist</button>
            </div>
        </div>
    )
}

export { ProductCard }