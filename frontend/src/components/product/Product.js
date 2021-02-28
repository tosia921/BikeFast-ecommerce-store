import React from 'react';
import './Product.scss';

const Product = ({ product }) => {
    return (
        <div className='product-container'>
        <a href={`/product/${product._id}`}>
            <div className='product-image-container'>
                <img className='product-image' src={product.image}  alt='ss'/>
            </div>
            <div className='product-detail-container'>
                <h2 className='product-name'>{product.name}</h2>
                <p className='product-rating'>{product.rating}</p>
                <p className='product-price'>£ {product.price}</p>
            </div>
        </a>
        </div>
    )
}

export default Product
