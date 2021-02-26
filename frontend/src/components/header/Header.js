import React from 'react';
import './Header.scss';

import { NavLink } from 'react-router-dom';;

const Header = () => {
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
                <NavLink className='login--cart--link' activeStyle={{color: "#ef8216"}} to='/signin' exact>SIGN IN</NavLink>
                <NavLink className='login--cart--link' activeStyle={{color: "#ef8216"}} to='/cart' exact>CART</NavLink>
            </div>
        </header>
    )
}

export default Header;
