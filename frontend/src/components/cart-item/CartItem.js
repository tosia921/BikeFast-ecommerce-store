import React from 'react';
import './CartItem.scss';
import { Link } from 'react-router-dom';

const CartItem = ({item}) => {

    return (
        <div className='cart-item' key={item.product}>
            <div className='cart-item-image'>
                <img className=''src={item.image} alt={item.name}/>
            </div>
            <div className='cart-item-info'>
                <h2><Link to={`/product/${item.product}`}>{item.name}</Link></h2>
                <h3>item.</h3>
            </div>
            <div className='cart-item-price'>
                <h3>{item.price}</h3>
                <h4>{item.qty}</h4>
            </div>
        </div>
    )
}

export default CartItem;
