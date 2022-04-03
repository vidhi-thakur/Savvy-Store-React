import React from 'react'
import { Link } from 'react-router-dom'
// css
import './Home.css'
// local components
import HomeCategory from 'components/home/category/HomeCategory'

function Home() {
    return (
        <div className='home'>
            <section className="about-section">
                <div className="about pt-1 m-auto">
                    <h2 className="about-heading">Welcome to <span className="heading-highlight">Savvy</span></h2>
                    <p className="about-content mt-1">
                        Your one stop destination to buy florals and garden crafts.
                    </p>
                    <p className="about-content mt-1">
                    </p>
                    <div>
                        <Link to="/product">
                            <button className="btn btn-primary-contained btn-doc">shop now <i className='fas fa-arrow-right'></i></button>
                        </Link>
                    </div>
                </div>
            </section>
            <HomeCategory />
        </div>
    )
}

export { Home }