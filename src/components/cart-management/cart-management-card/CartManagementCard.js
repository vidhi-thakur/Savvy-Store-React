import React from 'react'

function CartManagementCard() {
    return (
        <div className="card card-horizontal">
            <span className="badge badge-primary-contained card-customBadge-horizontal">New</span>
            <img loading="lazy" className="card-image-vertical"
                src="https://th.bing.com/th/id/OIP.327gZuChoI2kICVOvypyGgHaHc?w=219&h=220&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                alt="dress" />
            <div className="br-inherit">
                <div className="card-textContainer br-inherit">
                    <h3 className="pb-1">Pink Dress</h3>
                    <p className="pb-1">Girls White & Blue Printed Dress <br /> <small>Sold by: Lil Picks</small></p>
                    <p>White and blue printed playsuit with knot detail, has a shirt collar, sleeveless, button
                        closures
                    </p>
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