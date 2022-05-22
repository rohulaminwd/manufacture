import React from 'react';
import parts from '../../assets/images/parts (1).jpg'
import ReviewCard from './ReviewCard';

const Review = () => {
    const reviews = [
        {
            name: "Rohul amin",
            describe: "this is nice product This is easy and confortable use thank you so much for hepl",
            img: parts,
            ratting: [1, 1, 1, 1,],
        },
        {
            name: "Rohul amin",
            describe: "this is nice product This is easy and confortable use thank you so much for hepl",
            img: parts,
            ratting: [1, 1, 1, 1,],
        },
        {
            name: "Rohul amin",
            describe: "this is nice product This is easy and confortable use thank you so much for hepl",
            img: parts,
            ratting: [1, 1, 1, 1,],
        },
        {
            name: "Rohul amin",
            describe: "this is nice product This is easy and confortable use thank you so much for hepl",
            img: parts,
            ratting: [1, 1, 1, 1,],
        },
    ]
    return (
        <div className='my-10'>
            <h1 className='text-2xl font-bold text-center mb-4'>What Say Customer..?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;