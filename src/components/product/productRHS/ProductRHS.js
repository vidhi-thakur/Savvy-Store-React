import React, { useEffect, useState } from 'react';
// css
import './ProductRHS.css';
// helpers
import { fetchProducts } from 'utils/api/fetchProducts';
// local component
import { ProductCard } from '../productCard/ProductCard';

function ProductRHS() {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await fetchProducts();
            setProducts(response);
        })()
    }, [])
    return (
        <section className="product">
            {products && products.map(prod => <ProductCard
                id={prod._id}
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

export { ProductRHS }