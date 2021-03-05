import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../redux/actions/productActions'
import './ProductDetails.scss';
import Rating from '../rating/Rating';
import CustomButton from '../custom-button/CustomButton';
import LoaderSpinner from '../loader/Loader';

const ProductDetails = ( {match} ) => {

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div className='product-details-container'>
            <CustomButton to='/' secondaryColor>go back</CustomButton>

            {loading ? <LoaderSpinner/> : error ? <h2>{error}</h2> : (
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
            )}
            
        </div>
    )
}

export default ProductDetails
