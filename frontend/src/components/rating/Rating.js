import React from 'react'
import './Rating.scss';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const Rating = ({ value, text }) => {
    return (
        <div className='rating'>
            <div className='stars-container'> 
                <span>
                    {value >= 1 ? <BsStarFill className='star'/> : value >= 0.5 ? <BsStarHalf className ='star' /> : <BsStar className='star'/>}
                </span>
                <span>
                    {value >= 2 ? <BsStarFill className='star'/> : value >= 1.5 ? <BsStarHalf className='star'/> : <BsStar className='star'/>}
                </span>
                <span>
                    {value >= 3 ? <BsStarFill className='star'/> : value >= 2.5 ? <BsStarHalf className='star'/> : <BsStar className='star'/>}
                </span>
                <span>
                    {value >= 4 ? <BsStarFill className='star'/> : value >= 3.5 ? <BsStarHalf className='star'/> : <BsStar className='star'/>}
                </span>
                <span>
                    {value === 5 ? <BsStarFill className='star'/> : value >= 4.5 ? <BsStarHalf className='star'/> : <BsStar className='star'/>}
                </span>
            </div>
            <div className='rating-text'>{text && text}</div>
        </div>
    )
}

export default Rating
