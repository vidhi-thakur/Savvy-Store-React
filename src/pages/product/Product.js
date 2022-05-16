import React, { useState, useEffect } from 'react';
// css
import './Product.css';
// local component
import { Alert, ProductRHS, Sidebar } from 'components/exportComponents';

function Product() {
    const [filters, setFilters] = useState({
        category: [],
        sort: [],
        rating: []
    })
    const initialProductStatus = {
        content: null,
        type: null
    }
    const [productStatus, setproductStatus] = useState(initialProductStatus)
    useEffect(() => {
        if (productStatus.content && productStatus.type) {
            setTimeout(() => setproductStatus(initialProductStatus), 1500)
        }
    }, [productStatus])
    return (
        <div className='product-listing'>
            {productStatus.content && productStatus.type && <Alert type={productStatus.type} content={productStatus.content} />}
            <Sidebar filters={filters} setFilters={setFilters} />
            <ProductRHS filters={filters} setproductStatus={setproductStatus} />
        </div>
    )
}

export { Product }