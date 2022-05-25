import React from 'react';
import {BsStarFill} from 'react-icons/bs'

const ReviewCard = ({review}) => {
    const {name, description, starr, } = review;
    return (
        <div data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="800">
            <div class="card bg-base-100 text-start h-full border hover:border-blue-900 hover:shadow-md hover:translate-y-[-5px] transition border-blue-200">
            <div class="p-4">
                <h2 class="text-xl font-bold">{name}</h2>
                <p className='my-2'>{description.slice(0, 60)}...</p>
                <div class="flex ">
                    {starr.map( (index) => <div key={index} className='mx-1 flex font-bold text-xl text-accent'> <BsStarFill /> </div>  )}  
                </div>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;