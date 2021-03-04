import React, { useState, useEffect } from 'react';
import './LatestProducts.scss';
import Product from '../../components/product/Product';
import axios from 'axios';

const LatestProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async() => {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <section className='latest-products'>
            <h1 className='latest-products-title'>Latest Products</h1>
            <div className='latest-products-grid-container'>
                {products.map(product => (
                    <Product key={product._id} product={product}/>
                ))}
            </div>
        </section>
    )
}

export default LatestProducts;
