import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listProducts } from '../../redux/actions/productActions';

import './LatestProducts.scss';
import Product from '../../components/product/Product';
import LoaderSpinner from '../loader/Loader';


const LatestProducts = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <section className='latest-products'>
            <h1 className='latest-products-title'>Latest Products</h1>
            {
            loading ? 
                (<LoaderSpinner/>) 
            : error ? 
                (<h3>{error}</h3>) 
            :
                (<div className='latest-products-grid-container'>
                    {products.map(product => (
                        <Product key={product._id} product={product}/>
                    ))}
                </div>)
            }
            
        </section>
    )
}

export default LatestProducts;