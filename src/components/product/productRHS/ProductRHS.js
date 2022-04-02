import React from 'react';
import { products } from '../../../backend/db/products';
import ProductCard from '../productCard/ProductCard';

// css
import './ProductRHS.css'

function ProductRHS() {
    return (
        <section className="product">
            {products.map(prod => <ProductCard
                key={prod._id}
                title={prod.title}
                rating={prod.rating}
                description={prod.description}
                productImage={prod.productImage}
                author={prod.author}
                price={prod.price}
            />)}
        </section>
    )
}

export default ProductRHS