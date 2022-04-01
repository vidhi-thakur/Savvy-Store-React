import React from 'react';

// css
import './FilterType.css'

function FilterType({ heading, inputs }) {
    return (
        <section>
            <h3 className="mb-05">{heading}</h3>
            <div className="filterName">
                {inputs.map(input => <div className="checkbox input-container filterName-input">
                    <input className="checkbox-input" id="checkbox-input" type="checkbox" /><label
                        for="checkbox-input">{input}</label>
                </div>)}
            </div>
        </section>
    )
}

export default FilterType