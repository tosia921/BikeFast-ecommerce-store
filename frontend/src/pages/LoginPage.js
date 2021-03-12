import React, {useState, useEffect} from 'react'
import './LoginPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '../components/loader/Loader';
import { login } from '../redux/actions/userActions';
import FormContainer from '../components/form-container/FormContainer';
import CustomButton from '../components/custom-button/CustomButton';

const LoginPage = ({location, history}) => {

    //creating state variables for form inputs
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    //referencing useDispatch function to dispatch variable, so we can dispatch actions to the redux store
    const dispatch = useDispatch()

    //extracting userLogin data from redux store
    const userLogin = useSelector(state => state.userLogin)
    //destructuring data from userLogin object
    const { loading, error, userInfo } = userLogin;

    //conditionally assigning location's object search property (only part after '=' sign)to the redirect variable, if it does not exists, assign only '/' that will take us to the home page
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => { // checking if user is already logged in, if is then redirect
        if(userInfo) {
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    //method that dispatches login action on form submit
    const SubmitHandler = (e) => { 
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1 className='sign-in-h1'>SIGN IN</h1>
            {/* if login fails displays error */}
            {error && <p>{error}</p>} 
            {/* displays loading component while in loading stage */}
            {loading && <LoaderSpinner/>}
            {/* login form */}
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
                {/* button that redirects to the register page */}
                <p>New Customer?</p> <CustomButton secondaryColor to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register Here</CustomButton>
            </div>
        </FormContainer>
    )
}

export default LoginPage
