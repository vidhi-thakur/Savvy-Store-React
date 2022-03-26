import React from 'react'

// css
import './DealOfTheDay.css'

function DealOfTheDay() {
  return (
    <div className='dealOfTheDay'>
      <h2>Deals of the Day</h2>
      <section className='dealOfTheDay-cards'>

        <div className="card card-horizontal">
          <img loading="lazy" className="card-image-vertical"
            src={"https://th.bing.com/th/id/OIP.327gZuChoI2kICVOvypyGgHaHc?w=219&h=220&c=7&r=0&o=5&dpr=1.25&pid=1.7"}
            alt="dress" />
          <div className="br-inherit">
            <div className="card-textContainer br-inherit">
              <h3 className="pb-1">Pink Dress</h3>
              <p className="pb-1">{"Girls White & Blue Printed Dress "}<br /> <small>Sold by: Lil Picks</small></p>
              <p>White and blue printed playsuit with knot detail, has a shirt collar, sleeveless, button closures
              </p>
            </div>
            <div className="card-btnContainer br-inherit">
              <button className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to
                cart</button>
              <button className="btn btn-primary-outlined">move to wishlist</button>
            </div>
          </div>
        </div>

        <div className="card card-horizontal">
          <img loading="lazy" className="card-image-vertical"
            src={"https://th.bing.com/th/id/OIP.327gZuChoI2kICVOvypyGgHaHc?w=219&h=220&c=7&r=0&o=5&dpr=1.25&pid=1.7"}
            alt="dress" />
          <div className="br-inherit">
            <div className="card-textContainer br-inherit">
              <h3 className="pb-1">Pink Dress</h3>
              <p className="pb-1">{"Girls White & Blue Printed Dress "}<br /> <small>Sold by: Lil Picks</small></p>
              <p>White and blue printed playsuit with knot detail, has a shirt collar, sleeveless, button closures
              </p>
            </div>
            <div className="card-btnContainer br-inherit">
              <button className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to
                cart</button>
              <button className="btn btn-primary-outlined">move to wishlist</button>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default DealOfTheDay