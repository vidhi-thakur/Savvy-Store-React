import React from 'react';

// css
import './FilterType.css'

function FilterType({ heading, inputs, setFilters }) {
    const updateCategory = (filters, input) => {
        return {
            ...filters,
            category: filters.category.includes(input) ? filters.category.filter(data => data !== input) : [...filters.category, input]
        }
    }
    const updateSort = () => {

    }
    const updateRating = () => {

    }
    const sidebarFilters = (input, heading) => {
        switch (heading) {
            case "Category":
                setFilters((filters) => updateCategory(filters, input))
                return;
            case "Sort by":
                setFilters(updateSort)
                return;
            case "Ratings":
                setFilters(updateRating)
                return;

            default:
                return;
        }
    }
    return (
        <section>
            <h3 className="mb-05">{heading}</h3>
            <div className="filterName">
                {inputs.map((input, i) => <div key={i} className="checkbox input-container filterName-input" onChange={() => sidebarFilters(input, heading)}>
                    <input className="checkbox-input" id={`${input}-${heading}`} type="checkbox" /><label
                        for={`${input}-${heading}`}>{input}</label>
                </div>)}
            </div>
        </section>
    )
}

export { FilterType }