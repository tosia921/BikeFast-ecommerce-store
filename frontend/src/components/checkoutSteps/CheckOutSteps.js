import React from 'react';
import './CheckOutSteps.scss';
import { Link } from 'react-router-dom';

const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <div className='chechout-step-cointainer'>
            <div className='checkout-steps'>
                <div className='chechout-step-link-container'>
                    {step1? (
                        <Link className='active-link' to='/login'>Sign In</Link>
                    ) : <Link className='disabled-link'>Sign In</Link>}
                </div>
                <div className='chechout-step-link-container'>
                    {step2? (
                        <Link className='active-link' to='/shipping'>Shipping</Link>
                    ) : <Link className='disabled-link'>Shipping</Link>}
                </div>
                <div className='chechout-step-link-container'>
                    {step3? (
                        <Link className='active-link' to='/payment'>Payment</Link>
                    ) : <Link className='disabled-link'>Payment</Link>}
                </div>
                <div className='chechout-step-link-container'>
                    {step4? (
                        <Link className='active-link' to='/placeorder'>Place Order</Link>
                    ) : <Link className='disabled-link'>Place Order</Link>}
                </div>
            </div>
            <div className='horizontal-line'></div>
        </div>
        
    )
}

export default CheckOutSteps;
