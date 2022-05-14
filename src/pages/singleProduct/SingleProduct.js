import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css'
import { fetchSingleProduct } from 'helpers/singleProduct/fetchSingleProduct';
import { useCart } from 'context/addToCart';
import { useWishlist } from 'context/addToWishlist';

function SingleProduct() {
    const [, dispatchCart] = useCart();
    const [, dispatchWishlist] = useWishlist();
    const [singleproduct, setSingleProduct] = useState(null)
    const [itemWishlisted, setItemWishlisted] = useState(false)
    const { productID } = useParams();
    useEffect(() => {
        (async () => {
            try {
                if (productID) {
                    const response = await fetchSingleProduct(productID)
                    setSingleProduct(response.product)
                }
            } catch (e) {
                console.error(e)
            }
        })()
    }, [])

    const addItemToCart = () => {
        dispatchCart({
            type: "ADD_TO_CART",
            payload: {
                title: singleproduct?.title,
                author: singleproduct?.author,
                rating: singleproduct?.rating,
                description: singleproduct?.description,
                price: singleproduct?.price,
                productImage: singleproduct?.productImage,
                id: productID
            }
        })
    }

    const addItemToWishlist = () => {
        setItemWishlisted(!itemWishlisted)
        if (!itemWishlisted) {
            dispatchWishlist({
                type: "ADD_TO_WISHLIST",
                payload: {
                    title: singleproduct?.title,
                    author: singleproduct?.author,
                    rating: singleproduct?.rating,
                    description: singleproduct?.description,
                    price: singleproduct?.price,
                    productImage: singleproduct?.productImage,
                    id: productID
                }
            })
        } else {
            dispatchWishlist({
                type: "REMOVE_FROM_WISHLIST",
                payload: {
                    id: productID
                }
            });
        }
    }
    return (
        <div className='singleProduct'>
            <aside className='singleProduct-image-container'>
                <img className='singleProduct-image' src={singleproduct?.productImage} alt={singleproduct?.title} />
                <div className='badge-container badge-custom' onClick={addItemToWishlist}>
                    <i className={`${itemWishlisted ? `fas fa-heart` : `fa fa-heart-o`} badges icon-badge badge-round cp`}></i>
                </div>
            </aside>
            <div className='singleProduct-information'>
                <small className='singleProduct-seller'>
                    <span>By {singleproduct?.author}</span><span>{singleproduct?.rating}⭐</span>
                </small>
                <h3 className='singleProduct-heading'>{singleproduct?.title}</h3>
                <p>{singleproduct?.description}</p>
                <p className='bold-text'>₹ {singleproduct?.price}</p>
                <button onClick={addItemToCart} className="btn btn-primary-contained"><i className="fas fa-cart-plus  mr-05"></i> add to
                    cart</button>
            </div>
        </div>
    )
}

export { SingleProduct }