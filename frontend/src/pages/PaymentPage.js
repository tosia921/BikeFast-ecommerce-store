import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/form-container/FormContainer';
import CheckOutSteps from '../components/checkoutSteps/CheckOutSteps';
import CustomButton from '../components/custom-button/CustomButton';
import { savePaymentMethod } from '../redux/actions/cartActions';
import './PaymentPage.scss';

const PaymentPage = ({ history }) => {

    const cart = useSelector (state => state.cart)
    const { shippingAddress } = cart

    //if user still didnt fill in shipping address redirect to shipping page
    if(!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch();

    const SubmitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))

        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckOutSteps step1 step2 step3/>
            <h1 className='payment-method-h1'>Payment Method</h1>
            <form className='payment-method-form' onSubmit={SubmitHandler}>
                <div className='payment-method-form-inputs'>
                    <label htmlFor='paypal' className='payment-method-form-label'>
                        PayPal
                    </label>
                    <input 
                        id='paypal' 
                        type='radio' 
                        name='paypal' 
                        className='payment-method-form-input' 
                        placeholder='Enter your Address'
                        value='PayPal'
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                </div>
                <CustomButton type='submit'>Continue</CustomButton>
            </form>
        </FormContainer>
    )
}

export default PaymentPage
