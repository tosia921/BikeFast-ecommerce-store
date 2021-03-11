import React, {useState, useEffect} from 'react'
import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '../components/loader/Loader';
import { login } from '../redux/actions/userActions';
import FormContainer from '../components/form-container/FormContainer';
import CustomButton from '../components/custom-button/CustomButton';

const LoginPage = ({location, history}) => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/'
    console.log(location)

    useEffect(() => { // checking if user is already logged in, if is then redirect
        if(userInfo) {
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    const SubmitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1 className='sign-in-h1'>SIGN IN</h1>
            {error && <p>{error}</p>}
            {loading && <LoaderSpinner/>}
            <form className='form' onSubmit={SubmitHandler}>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email Address
                    </label>
                    <input 
                        id='email' 
                        type='email' 
                        name='email' 
                        className='form-input' 
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input 
                        id='password' 
                        type='password' 
                        name='password' 
                        className='form-input' 
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <CustomButton type='submit'>Sign In</CustomButton>
            </form>

            <div className='new-customer-container'>
            <p>New Customer?</p> <CustomButton secondaryColor to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register Here</CustomButton>
            </div>
        </FormContainer>
    )
}

export default LoginPage
