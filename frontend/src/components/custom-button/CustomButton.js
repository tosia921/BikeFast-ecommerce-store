import React from 'react';
import { Link } from 'react-router-dom';
import './CustomButton.scss';

const CustomButton = ({to, children, secondaryColor, ...otherProps}) => {
    return (
        <Link to={to}>
            <button className={secondaryColor ? 'custom-button secondary-color' : 'custom-button'}>
            {children}
            </button>
        </Link>
    )
}

export default CustomButton;
