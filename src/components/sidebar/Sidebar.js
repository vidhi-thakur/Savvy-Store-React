import React from 'react';
// css
import './Sidebar.css';
// local components
import { FilterType } from 'components/exportComponents';

const filters = [
  {
    type: "Category",
    list: ["All items", "Handmade", "Vintage"]
  },
  {
    type: "Sort by",
    list: ["Price - low to high", "Price - high to low"]
  },
  {
    type: "Ratings",
    list: ["5⭐", "4⭐", "3⭐", "2⭐", "1⭐"]
  }
]

function Sidebar({ setFilters }) {
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

      {filters.map(filter => <FilterType
        key={filter.type}
        heading={filter.type}
        inputs={filter.list}
        setFilters={setFilters}
      />)}

    </aside>
  )
}

export { Sidebar }