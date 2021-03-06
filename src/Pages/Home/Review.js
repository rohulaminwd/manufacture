import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Review = () => {
    const {data: reviews, isLoading} = useQuery('review', () => fetch('https://arcane-journey-12889.herokuapp.com/review', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading />
    }
    return (
        <div className='my-10'>
            <h1 className='lg:text-4xl text-2xl font-bold text-center my-8'>See What Our Customers Say About Us</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviews?.slice(0, 6).map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;