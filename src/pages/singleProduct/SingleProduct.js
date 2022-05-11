import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css'
import { fetchSingleProduct } from 'helpers/singleProduct/fetchSingleProduct';

function SingleProduct() {
    const [singleproduct, setSingleProduct] = useState(null)
    const { productID } = useParams();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetchSingleProduct(productID)
                setSingleProduct(response.product)
            } catch (e) {
                console.error(e)
            }
        })()
    }, [])
    return (
        <div className='product'>
            <aside>
                <img src={singleproduct?.productImage} alt={singleproduct?.title} />
            </aside>
            <div>
                <h2>{singleproduct?.title}</h2>
                <small>
                    {singleproduct?.author}{"   "} {singleproduct?.rating}⭐
                </small>
                <p>{singleproduct?.description}</p>
                <p>Price: {singleproduct?.price}</p>
            </div>
        </div>
    )
}

export { SingleProduct }