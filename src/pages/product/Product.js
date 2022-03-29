import React from 'react';

// css
import './Product.css';

// local component
import Sidebar from '../../components/sidebar/Sidebar';

function Product() {
    return (
        <div className='product-listing'>
            <Sidebar />
            <section className="product">
                <div className="card card-vertical">
                    <img loading="lazy" className="card-image-horizontal"
                        src="https://th.bing.com/th/id/OIP.327gZuChoI2kICVOvypyGgHaHc?w=219&h=220&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                        alt="dress" />
                    <div className="card-textContainer">
                        <h3 className="pb-1">Pink Dress</h3>
                        <p className="pb-1">Girls White & Blue Printed Dress <br /> <small>Sold by: Lil Picks</small></p>
                        <p>White and blue printed playsuit with knot detail, has a shirt collar, sleeveless, button closures
                        </p>
                    </div>
                    <div className="card-btnContainer">
                        <button className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to
                            cart</button>
                    </div>
                </div>

                <div className="card card-vertical">
                    <img loading="lazy" className="card-image-horizontal"
                        src="https://th.bing.com/th/id/OIP.327gZuChoI2kICVOvypyGgHaHc?w=219&h=220&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                        alt="dress" />
                    <div className="card-textContainer">
                        <h3 className="pb-1">Pink Dress</h3>
                        <p className="pb-1">Girls White & Blue Printed Dress <br /> <small>Sold by: Lil Picks</small></p>
                        <p>White and blue printed playsuit with knot detail, has a shirt collar, sleeveless, button closures
                        </p>
                    </div>
                    <div className="card-btnContainer">
                        <button className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to
                            cart</button>
                    </div>
                </div>

                <div className="card card-vertical">
                    <img loading="lazy" className="card-image-horizontal"
                        src="https://th.bing.com/th/id/OIP.327gZuChoI2kICVOvypyGgHaHc?w=219&h=220&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                        alt="dress" />
                    <div className="card-textContainer">
                        <h3 className="pb-1">Pink Dress</h3>
                        <p className="pb-1">Girls White & Blue Printed Dress <br /> <small>Sold by: Lil Picks</small></p>
                        <p>White and blue printed playsuit with knot detail, has a shirt collar, sleeveless, button closures
                        </p>
                    </div>
                    <div className="card-btnContainer">
                        <button className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to
                            cart</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product