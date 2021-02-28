import React from 'react';
import './LatestProducts.scss';
import products from '../../products';
import Product from '../../components/product/Product';

const LatestProducts = () => {
    return (
        <section className='latest-products'>
            <h1 className='latest-products-title'>Latest Products</h1>
            <div className='latest-products-grid-container'>
                {products.map(product => (
                    <Product product={product}/>
                ))}
            </div>
        </section>
    )
}

export default LatestProducts;
