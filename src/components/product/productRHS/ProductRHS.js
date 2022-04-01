import React from 'react';
import ProductCard from '../productCard/ProductCard';

// css
import './ProductRHS.css'

function ProductRHS() {
    return (

        <section className="product">
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    )
}

export default ProductRHS