import React from 'react'

function CartManagementCard({ title, author, rating, description, price, cartImage, }) {
    return (
        <div className="card card-horizontal">
            <span className="badge badge-primary-contained card-customBadge-horizontal">Best seller</span>
            <img loading="lazy" className="card-image-vertical"
                src={cartImage}
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
                    <button className="btn btn-primary-outlined"><i className="fas fa-cart-plus  mr-05"></i> remove from
                        cart</button>
                    <button className="btn btn-primary-outlined">move to wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default CartManagementCard