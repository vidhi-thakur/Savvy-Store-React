import React from 'react'

function WishlistCard({ title, author, rating, description, price, wishlistImage, }) {
    return (
        <div className="card card-vertical">
            <div className="badge-container card-customBadge">
                <i className="fas fa-heart badges icon-badge badge-round"></i>
            </div>
            <img loading="lazy" className="card-image-horizontal"
                src={wishlistImage}
                alt={title}
            />
            <div className="card-textContainer">
                <h3 className="pb-1">{title}</h3>
                <p className="pb-1">By {author}</p>
                <p className='card-productInfo'><strong>Rs. {price}</strong> <span>{rating}⭐</span></p>
                <p>{description}</p>
            </div>
            <div className="card-btnContainer">
                <button className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to cart</button>
            </div>
        </div>
    )
}

export default WishlistCard