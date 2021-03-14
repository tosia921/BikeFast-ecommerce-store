import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/form-container/FormContainer';
import CustomButton from '../components/custom-button/CustomButton';
import { saveShippingAddress } from '../redux/actions/cartActions';
import './ShippingPage.scss';

const ShippingPage = ({ history }) => {

    const cart = useSelector (state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postCode, setPostCode] = useState(shippingAddress.postCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch();

    const SubmitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postCode, country }))

        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1 className='shipping-h1'>Shipping</h1>
            <form className='shipping-form' onSubmit={SubmitHandler}>
            <div className='form-inputs'>
                    <label htmlFor='address' className='form-label'>
                        Address
                    </label>
                    <input 
                        id='address' 
                        type='text' 
                        name='address' 
                        className='form-input' 
                        placeholder='Enter your Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
            <div className='form-inputs'>
                    <label htmlFor='city' className='form-label'>
                        City
                    </label>
                    <input 
                        id='city' 
                        type='text' 
                        name='city' 
                        className='form-input' 
                        placeholder='Enter your City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            <div className='form-inputs'>
                    <label htmlFor='address' className='form-label'>
                        Post Code
                    </label>
                    <input 
                        id='postCode' 
                        type='text' 
                        name='postCode' 
                        className='form-input' 
                        placeholder='Enter your PostCode'
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                    />
                </div>
            <div className='form-inputs'>
                    <label htmlFor='country' className='form-label'>
                        Country
                    </label>
                    <input 
                        id='country' 
                        type='text' 
                        name='country' 
                        className='form-input' 
                        placeholder='Enter your Country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>

                <CustomButton type='submit'>Continue</CustomButton>
            </form>
        </FormContainer>
    )
}

export default ShippingPage
