import React from 'react';

// css
import './Sidebar.css';

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

      <section>
        <h3 className="mb-05">Category</h3>
        <div className="category">
          <div className="checkbox input-container category-input">
            <input className="checkbox-input" id="checkbox-input" type="checkbox" /><label
              for="checkbox-input">Men cloathig</label>
          </div>

          <div className="checkbox input-container category-input">
            <input className="checkbox-input" id="checkbox-input" type="checkbox" /><label
              for="checkbox-input">Women cloathig</label>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-05">Sort by</h3>
        <div className="sortBy">
          <div className="radio input-container category-input">
            <input className="radio-input" id="radio-input" type="radio" /><label for="radio-input">Men
              cloathig</label>
          </div>

          <div className="radio input-container category-input">
            <input className="radio-input" id="radio-input" type="radio" /><label for="radio-input">Women
              cloathig</label>
          </div>
          <div className="radio input-container category-input">
            <input className="radio-input" id="radio-input" type="radio" /><label for="radio-input">Men
              cloathig</label>
          </div>

          <div className="radio input-container category-input">
            <input className="radio-input" id="radio-input" type="radio" /><label for="radio-input">Women
              cloathig</label>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-05">Ratings</h3>
        <div className="ratings">
          <div className="radio input-container category-input">
            <input className="radio-input" id="radio-input" type="radio" /><label for="radio-input">Men
              cloathig</label>
          </div>

          <div className="radio input-container category-input">
            <input className="radio-input" id="radio-input" type="radio" /><label for="radio-input">Women
              cloathig</label>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar