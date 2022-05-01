import React from 'react'
// css
import './HomeCategory.css'
// static json
import { featuredCategory } from 'static/home/featuredCategory'
import { CategoryOverlay } from 'components/exportComponents'
// local components

function HomeCategory() {
  return (
    <div className='featuredCategory'>
      <h3 className="featuredCategory-heading">Featured Categories</h3>
      <section className='featuredCategory-cards'>
        {featuredCategory.map(category => <CategoryOverlay key={category.text} cardImage={category.image} cardText={category.text} />)}
      </section>
    </div>
  )
}

export { HomeCategory }