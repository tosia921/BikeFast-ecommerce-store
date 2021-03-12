import React from 'react';
import './Header.scss';
import { FiShoppingCart } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions'

import { NavLink } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header className='header'>
            <div className='header--logo--container'>
                <NavLink className='header--logo' to='/'>Bike<span>Fast</span></NavLink>
            </div>
            <nav className='nav--container'>
                <NavLink className='nav--link' activeStyle={{color: "#ef8216"}} to='/' exact>HOME</NavLink>
                <NavLink className='nav--link' activeStyle={{color: "#ef8216"}} to='/about' exact>ABOUT</NavLink>
                <NavLink className='nav--link' activeStyle={{color: "#ef8216"}} to='/shop' exact>SHOP</NavLink>
                <NavLink className='nav--link' activeStyle={{color: "#ef8216"}} to='/contact' exact>CONTACT</NavLink>
            </nav>
            <div className='login-shopcart--container'>
            {userInfo ? (
                <div className='logged-in-user-container'>
                    <div className='user-link-and-icon'>
                        <BiUser className='user-loggedin-icon'/>
                        <NavLink className='link-to-profile' activeStyle={{color: "#ef8216"}} to='/profile'>{userInfo.name}</NavLink>
                    </div>
                    <p onClick={logoutHandler}>Logout</p>
                </div>
                ) : (
                <div className='links-container'>
                    <BiUser className='user-icon'/>
                    <NavLink className='login--cart--link' activeStyle={{color: "#ef8216"}} to='/login' exact>SIGN IN</NavLink>
                </div>
            )}
                
                <div className='links-container'> 
                    <FiShoppingCart className='user-icon'/>
                    <NavLink className='login--cart--link' activeStyle={{color: "#ef8216"}} to='/cart' exact>CART</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;
