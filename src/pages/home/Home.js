import React from 'react'

// css
import './Home.css'

// local components
import HomeCategory from '../../components/home/category/HomeCategory'
import DealOfTheDay from '../../components/home/dealsOfTheDay/DealOfTheDay'

function Home() {
  return (
    <div>
      <section class="about-section">
        <div class="about pt-1 m-auto">
          <h2 class="about-heading">Welcome to <span class="heading-highlight">Savvy</span></h2>
          <p class="about-content mt-1">
            Your one stop destination to buy florals and garden crafts.
          </p>
          <p class="about-content mt-1">
            {/* Check the documentation to understand more about the UI. */}
          </p>
          <div>
            <a href="./pages/documentation.html">
              <button class="btn btn-primary-contained btn-doc">shop now <i class='fas fa-arrow-right'></i></button>
            </a>
          </div>
        </div>
      </section>
      <HomeCategory />
      <DealOfTheDay />
    </div>
  )
}

export default Home