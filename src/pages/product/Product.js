import React, { useState } from 'react';
// css
import './Product.css';
// local component
import { ProductRHS, Sidebar } from 'components/exportComponents';

function Product() {
    const [filters, setFilters] = useState({
        category: [],
        sort: [],
        rating: []
    })
    return (
        <div className='product-listing'>
            <Sidebar filters={filters} setFilters={setFilters} />
            <ProductRHS filters={filters} />
        </div>
    )
}

export { Product }