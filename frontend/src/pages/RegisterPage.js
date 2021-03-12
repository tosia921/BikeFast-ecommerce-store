import React, {useState, useEffect} from 'react'
import './RegisterPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '../components/loader/Loader';
import { register } from '../redux/actions/userActions';
import FormContainer from '../components/form-container/FormContainer';
import CustomButton from '../components/custom-button/CustomButton';

const RegisterPage = ({location, history}) => {

    //creating state variables for form inputs
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[message, setMessage] = useState(null)

    //referencing useDispatch function to dispatch variable, so we can dispatch actions to the redux store
    const dispatch = useDispatch()

    //extracting userLogin data from redux store
    const userRegister = useSelector(state => state.userRegister)
    //destructuring data from userLogin object
    const { loading, error, userInfo } = userRegister;

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
        if(password !== confirmPassword) {
            setMessage("Password's do not match")
        }
        dispatch(register(name, email, password))
    }


    return (
        <FormContainer>
            <h1 className='sign-in-h1'>REGISTER ACCOUNT</h1>
            {/* if password's do not match, display error message */}
            {message && <p>{message}</p>}
            {/* if register fails displays error */}
            {error && <p>{error}</p>} 
            {/* displays loading component while in loading stage */}
            {loading && <LoaderSpinner/>}
            {/* register form */}
            <form className='form' onSubmit={SubmitHandler}>
            <div className='form-inputs'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input 
                        id='name' 
                        type='text' 
                        name='name' 
                        className='form-input' 
                        placeholder='Enter your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                <div className='form-inputs'>
                    <label htmlFor='confirmPassword' className='form-label'>
                        Confirm Password
                    </label>
                    <input 
                        id='confirmPassword' 
                        type='password' 
                        name='confirmPassword' 
                        className='form-input' 
                        placeholder='Confirm your password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <CustomButton type='submit'>Register</CustomButton>
            </form>

            <div className='new-customer-container'>
                {/* button that redirects to the register page */}
                <p>Already an User?</p> <CustomButton secondaryColor to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login Here</CustomButton>
            </div>
        </FormContainer>
    )
}

export default RegisterPage
