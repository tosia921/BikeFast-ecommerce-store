import React from 'react';
import './Loader.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
    return (
        <div className='loading-container'>
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
    )
    
}
export default LoaderSpinner;