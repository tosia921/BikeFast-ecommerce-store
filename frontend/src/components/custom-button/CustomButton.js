import React from 'react';
import { Link } from 'react-router-dom';
import './CustomButton.scss';

const CustomButton = ({to, children, secondaryColor, ...otherProps}) => {
    return (
        to 
        ? 
        (<Link to={to}>
            <button className={secondaryColor ? 'custom-button secondary-color' : 'custom-button'} {...otherProps}>
            {children}
            </button>
        </Link>)
        :
        (<button className={secondaryColor ? 'custom-button secondary-color' : 'custom-button'} {...otherProps}>
            {children}
        </button>)
    )
}

export default CustomButton;
