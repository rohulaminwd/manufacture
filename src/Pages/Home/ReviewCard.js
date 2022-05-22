import React from 'react';
import {BsStarFill} from 'react-icons/bs'

const ReviewCard = ({review}) => {
    const {name, img, describ, ratting, _id} = review;
    return (
        <div>
            <div class="card bg-base-100 text-center border hover:shadow-md hover:translate-y-[-5px] transition border-blue-200">
            <div class="avatar flex justify-center mt-5">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
            </div>
            <div class="card-body">
                <h2 class="text-xl font-bold">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="flex justify-center">
                    {
                        ratting.map(start => <span className='mx-1 font-bold text-xl text-accent'><BsStarFill /></span>)
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;