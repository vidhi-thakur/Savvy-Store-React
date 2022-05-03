import React, { useEffect, useState } from 'react';
import './ProductRHS.css';
import { fetchProducts } from 'utils/api/fetchProducts';
import { ProductCard } from '../productCard/ProductCard';
import { addFilters, sortProducts } from 'helpers/filters';

function ProductRHS({ filters }) {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await fetchProducts();
            setProducts(response);
        })()
    }, [])
    return (
        <section className="product">
            {products && sortProducts(addFilters(products, filters), filters).map(prod => <ProductCard
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