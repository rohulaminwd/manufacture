import React from 'react';
import {BsStarFill} from 'react-icons/bs'

const ReviewCard = ({review}) => {
    const {name, description, rating, } = review;
    return (
        <div>
            <div class="card bg-base-100 text-center border hover:shadow-md hover:translate-y-[-5px] transition border-blue-200">
            <div class="card-body">
                <h2 class="text-xl font-bold">{name}</h2>
                <p>{description.slice(0, 40)}...</p>
                <div class="flex justify-center">
                 <div className='mx-1 flex font-bold text-xl text-accent'> {rating} <BsStarFill /> <BsStarFill /> <BsStarFill /> </div>   
                </div>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;