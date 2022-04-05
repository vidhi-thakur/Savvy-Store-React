import React from 'react';
// css
import './ProductCard.css'
// context
import { useCart } from 'context/addToCart';

function ProductCard({ id, title, author, rating, description, price, productImage }) {
    const [, dispatch] = useCart();

    const addItemToCart = () => {
        dispatch({
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

    return (
        <div className="card card-vertical">
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
                <button onClick={addItemToCart} className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to
                    cart</button>
            </div>
        </div>
    )
}

export default ProductCard