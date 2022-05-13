import React from 'react';

// css
import './FilterType.css'

function FilterType({ heading, inputs, setFilters, isChecked, setIsChecked }) {
    const updateCategory = (filters, input) => {
        !filters.category.includes(input) ? setIsChecked([...isChecked, input]) : setIsChecked(isChecked.filter(data => data !== input))
        return {
            ...filters,
            category: filters.category.includes(input) ? filters.category.filter(data => data !== input) : [...filters.category, input]
        }
    }
    const updateRating = (filters, input) => {
        !filters.rating.includes(input) ? setIsChecked([...isChecked, input]) : setIsChecked(isChecked.filter(data => data !== input))
        return {
            ...filters,
            rating: filters.rating.includes(input) ? filters.rating.filter(data => data !== input) : [...filters.rating, input]
        }
    }
    const sidebarFilters = (input, heading) => {
        switch (heading) {
            case "Category":
                setFilters((filters) => updateCategory(filters, input))
                return;
            case "Ratings":
                setFilters((filters) => updateRating(filters, input))
                return;
            default:
                return;
        }
    }
    return (
        <section>
            <h3 className="mb-05">{heading}</h3>
            <div className="filterName">
                {inputs.map((input, i) => <div key={i} className="checkbox input-container filterName-input">
                    <input onChange={() => sidebarFilters(input, heading)} checked={isChecked.includes(input)} className="checkbox-input" id={`${input}-${heading}`} type="checkbox" /><label
                        for={`${input}-${heading}`}>{input}</label>
                </div>)}
            </div>
        </section>
    )
}

export { FilterType }