import React from 'react'
import { Link } from 'react-router-dom'
// image
import pageNotFound from 'images/pageNotFound.svg'
// css
import './PageNotFound.css'

function PageNotFound() {
    return (
        <div className='pageNotFound'>
            <img className='pageNotFound-image' src={pageNotFound} alt="page not found" />
            <h4>This page does not exist, go to<Link to='/'><button class="btn btn-primary-link">Home page</button></Link></h4>
        </div>
    )
}

export { PageNotFound }