import React from 'react';

// css
import './FilterType.css'

function FilterType({ heading, inputs }) {
    return (
        <section>
            <h3 className="mb-05">{heading}</h3>
            <div className="filterName">
                {inputs.map((input, i) => <div key={i} className="checkbox input-container filterName-input">
                    <input className="checkbox-input" id={`${input}-${heading}`} type="checkbox" /><label
                        for={`${input}-${heading}`}>{input}</label>
                </div>)}
            </div>
        </section>
    )
}

export { FilterType }