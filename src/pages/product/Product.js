import React from 'react';

// css
import './Product.css';

// local component
import Sidebar from '../../components/sidebar/Sidebar';
import ProductRHS from '../../components/product/productRHS/ProductRHS';

function Product() {
    return (
        <div className='product-listing'>
            <Sidebar />
            <ProductRHS />
        </div>
    )
}

export default Product