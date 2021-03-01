import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import products from '../../products';

const ProductDetails = ( {match} ) => {

    const product = products.find(p => p._id === match.params.id)
    console.log(match);

    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductDetails
