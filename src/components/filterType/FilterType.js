import React from 'react';

// css
import './FilterType.css'

function FilterType({ heading, inputs, setFilters, isChecked, setIsChecked }) {
    const updateSelectedFilter = (filters, input, selectedFilter) => {
        !filters[selectedFilter].includes(input) ? setIsChecked([...isChecked, input]) : setIsChecked(isChecked.filter(data => data !== input))
        return {
            ...filters,
            [selectedFilter]: filters[selectedFilter].includes(input) ? filters[selectedFilter].filter(data => data !== input) : [...filters[selectedFilter], input]
        }
    }
    const sidebarFilters = (input, heading) => {
        switch (heading) {
            case "Category":
                const filterCategory = "category"
                setFilters((filters) => updateSelectedFilter(filters, input, filterCategory))
                return;
            case "Ratings":
                const filterRating = "rating"
                setFilters((filters) => updateSelectedFilter(filters, input, filterRating))
                return;
            default:
                return;
        }
    }
    return (
        <section>
            <h3 className="mb-05">{heading}</h3>
            <div className="filterName">
                {inputs.map((selectedFilter, i) => <div key={i} className="checkbox input-container filterName-input">
                    <input onChange={() => sidebarFilters(selectedFilter, heading)} checked={isChecked.includes(selectedFilter)} className="checkbox-input" id={`${selectedFilter}-${heading}`} type="checkbox" /><label
                        for={`${selectedFilter}-${heading}`}>{selectedFilter}</label>
                </div>)}
            </div>
        </section>
    )
}

export { FilterType }