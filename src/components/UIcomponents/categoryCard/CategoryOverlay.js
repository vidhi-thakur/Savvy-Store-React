import React from 'react'

// css
import "./CategoryOverlay.css"

function CategoryOverlay({ cardImage, cardText }) {
    return (
        <div className='category-card'>
            <img className='category-image' src={cardImage} alt={cardText} />
            <p className='category-text'>{cardText}</p>
        </div>
    )
}

export default CategoryOverlay