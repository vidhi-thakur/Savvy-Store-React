import React from 'react'
import { Link } from 'react-router-dom'
// css
import './NoData.css'

function NoData({ componentName, CTAtext, CTAlink }) {
    return (
        <div className="noData">
            <h1>Your {componentName} is empty!</h1>
            <Link to={CTAlink ?? "/product"}>
                <button className="btn btn-primary-contained btn-doc">{CTAtext ?? "shop now"} <i className='fas fa-arrow-right'></i></button>
            </Link>
        </div>
    )
}

export default NoData