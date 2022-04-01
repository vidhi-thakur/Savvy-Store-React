import React from 'react';
import FilterType from '../filterType/FilterType';

// css
import './Sidebar.css';

const input = ["Men's cloathing", "Women's cloathing"]

function Sidebar() {
  return (
    <aside className="filter">
      <div className="filter-header">
        <h2>Filter</h2>
        <span className="cp">Clear</span>
      </div>

      <section>
        <h3 className="mb-05">Price</h3>
        <div className="price-range-input">
          <label for="price-range">Select range</label>
          <input type="range" id="price-range" name="price-range" className="price-range" min="50" max="200" />
        </div>
      </section>

      <FilterType
        heading="Category"
        inputs={input}
      />

      <FilterType
        heading="Sort by"
        inputs={input}
      />

      <FilterType
        heading="Ratings"
        inputs={input}
      />
    </aside>
  )
}

export default Sidebar