import React from 'react';
import './CartItem.scss';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import {ReactComponent as DeleteCartItemIcon} from '../../assets/trash.svg'

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='cart-item' key={item.product}>
            <div className='cart-item-image-container'>
                <img className='cart-item-image'src={item.image} alt={item.name}/>
            </div>
            <div className='cart-item-info'>
                <h2><Link to={`/product/${item.product}`}>{item.name}</Link></h2>
            </div>
            <div className='cart-item-price'>{item.price}£</div>
            <div className='cart-qty'>
                <select class="qty-select" name='ItemQuanity' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                    {
                        [...Array(item.countInStock).keys()].map(x => (
                            <option key={x+1} value={x+1}>{x+1}</option>
                        ))
                    }
                </select>    
            </div>
            <div onClick={() => removeFromCartHandler(item.product)}>
            <DeleteCartItemIcon className='delete-icon'/>
            </div>
        </div>
    )
}

export default CartItem;
