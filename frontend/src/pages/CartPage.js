import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '../components/loader/Loader';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';
import CartItem from '../components/cart-item/CartItem';
import CustomButton from '../components/custom-button/CustomButton';

import './CartPage.scss';

const CartPage = ({ match, location, history }) => {
    const productId = match.params.id //taking item id from url
    const qty = location.search ? Number(location.search.split('=')[1]) : 1 // accesing item qty from utl whi looks like this ?qty=1 , then we use split method to put it into 2 arrays, first array will loke like this qty secont liek this 1, then we acces value of second array by putting aquare brackets with value 1, which is second array to get qty value

    const dispatch = useDispatch();

    useEffect(() => { //when component mounts check id productID exists, if it does dispatch action to add item to cart
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const cart = useSelector(state => state.cart) // assigning cart global state to cart variable
    const { cartItems } = cart // destructuring cartItems from cart
    
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <main className='cart-page'>
            <div className='cart-items'>
                {cartItems.length === 0 ? <h1 className='empty-cart-message'>Your Cart is empty</h1> : (
                    <div className='cart-items-list'>
                        {
                            cartItems.map(item => (
                                <CartItem key={item.product} item={item}/>   
                            ))
                        }
                    </div>
                )}
            </div>
            <div className='cart-summary'>
                <div className='cart-summary-name'>
                    <p>Cart Summary</p>
                </div>
                <div className='cart-summary-info'>
                    <div className='cart-summary-itemCount'>
                        Items in Cart: {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </div>
                    <div className='cart-sumarry-totalPrice'>
                        Total Price: {cartItems.reduce((acc, item) => acc+ item.qty * item.price, 0).toFixed(2)}
                    </div>
                </div>
                <div className='cart-summary-buttons'>
                    <CustomButton secondaryColor to='/'>Continue Shopping</CustomButton>
                    <CustomButton disabled={cartItems.length === 0} onClick={checkoutHandler}>Go to Checkout</CustomButton>
                </div>
            </div>
        </main>
    )
}

export default CartPage;
