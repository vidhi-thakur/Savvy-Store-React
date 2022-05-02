import React from 'react';
// css
import './Product.css';
// local component
import { ProductRHS, Sidebar } from 'components/exportComponents';

function Product() {
    return (
        <div className='product-listing'>
            <Sidebar />
            <ProductRHS />
        </div>
    )
}

export { Product }