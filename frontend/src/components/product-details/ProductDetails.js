import React from 'react';
import './ProductDetails.scss';
import Rating from '../rating/Rating';
import products from '../../products';
import CustomButton from '../custom-button/CustomButton';

const ProductDetails = ( {match} ) => {

    const product = products.find(p => p._id === match.params.id)
    console.log(match);

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
                    <div style={{ borderTop: "1px solid #000 ", marginTop: 40, marginBottom: 40 }}></div>
                    <div className='product-details-rating'>
                        <Rating value={product.rating}/>
                    </div>
                </div>
                <div className='grid-col-3'></div>
            </section>
        </div>
    )
}

export default ProductDetails
