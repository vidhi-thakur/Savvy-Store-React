import React from 'react'

// css
import './HomeCategory.css'

// static json
import { featuredCategory } from '../../../static/home/featuredCategory'

// local components
import CategoryOverlay from '../../UIcomponents/categoryCard/CategoryOverlay'


function HomeCategory() {

  return (
    <div>
      <h3 className="featuredCategory-heading">Featured Categories</h3>
      <section className='featuredCategory-cards'>
        {featuredCategory.map(category => <CategoryOverlay key={category.text} cardImage={category.image} cardText={category.text} />)}
      </section>
    </div>
  )
}

export default HomeCategory