import React, { useState } from 'react';
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
    type: "Ratings",
    list: ["5⭐", "4⭐", "3⭐", "2⭐", "1⭐"]
  }
]

const sortBy = ["Price - low to high", "Price - high to low"]

function Sidebar({ setFilters }) {
  const [isChecked, setIsChecked] = useState([])
  const resetFilters = () => {
    setIsChecked([])
    setFilters({
      category: [],
      sort: [],
      rating: []
    })
  }
  const updateSort = (filters, input) => {
    if (!filters.sort.includes(input)) {
      const removeItem = sortBy.filter(item => item !== input)
      setIsChecked([...isChecked.filter(item => item !== removeItem[0]), input])
    }
    return {
      ...filters,
      sort: filters.sort.includes(input) ? filters.sort.filter(data => data !== input) : [input]
    }
  }
  return (
    <aside className="filter">
      <div className="filter-header">
        <h2>Filter</h2>
        <span onClick={resetFilters} className="cp">Clear</span>
      </div>

      <section className='filter-price-range'>
        <h3 className="mb-05">Price</h3>
        <div className="price-range-input">
          <label for="price-range">Select range</label>
          <input type="range" id="price-range" name="price-range" className="price-range" min="50" max="200" />
        </div>
      </section>

      <section>
        <h3 className="mb-05">Sort By</h3>
        <div className='sort-container'>
          {sortBy.map(option => <div key={option} onClick={() => setFilters((filters) => updateSort(filters, option))} className="sort-input">
            <input checked={isChecked.includes(option)} type="radio" id={option} name="sort-by" className="sort-range" value={option} />
            <label className='cp' for={option}>{option}</label>
          </div>)}
        </div>
      </section>

      {filters.map(filter => <FilterType
        key={filter.type}
        heading={filter.type}
        inputs={filter.list}
        setFilters={setFilters}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />)}

    </aside>
  )
}

export { Sidebar }