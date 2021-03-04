import React from 'react';
import './ProductDetails.scss';
import Rating from '../rating/Rating';
import products from '../../products';
import CustomButton from '../custom-button/CustomButton';

const ProductDetails = ( {match} ) => {

    const product = products.find(p => p._id === match.params.id)

    return (
        <div className='product-details-container'>
            <CustomButton to='/' secondaryColor>go back</CustomButton>
            <section className='product-details'>
                <div className='grid-col-1'>
                    <img src={product.image} alt={product.name}/>
                    <p>REVIEWS</p>
                </div>
                <div className='grid-col-2'>
                    <p>{product.name}</p>
                    <div style={{ borderTop: "1px solid #000 ", marginTop: 20, marginBottom: 20 }}></div>
                    <div className='product-details-rating'>
                        <Rating value={product.rating}>{product.numReviews} reviews</Rating>
                    </div>
                    <div style={{ borderTop: "1px solid #000 ", marginTop: 20, marginBottom: 20 }}></div>
                    <div className='product-details-price'>Price: £{product.price}</div>
                    <div style={{ borderTop: "1px solid #000 ", marginTop: 20, marginBottom: 20 }}></div>
                    <div className='product-details-description'>{product.description}</div>
                </div>
                <div className='grid-col-3'>
                    <div className='add-to-cart-box'>Price: £{product.price}</div>
                    <div className='add-to-cart-box'>
                        Status: {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                    </div>
                    <div className='add-to-cart-box'>quanity</div>
                    <div className='product-details-button-container'>
                    <CustomButton>ADD TO CART</CustomButton>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetails
