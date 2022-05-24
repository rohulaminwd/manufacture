import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    
    

    const onSubmit = async data => {

        const star = data.rating;
        
        const review = {
            name: user.displayName,
            email: user.email,
            description: data.description,
            rating: star,
        }
        console.log(review)
        // send data backend
        fetch('https://arcane-journey-12889.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                reset()
                toast.success('Review successfully added');
            }else{
                toast.error('fail to add Review')
            }
        })
    }
    return (
        <div>
            <div className='flex justify-center items-center lg:mt-24'>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-md" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-center">Add Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="text" 
                                value={user.displayName} 
                                disabled
                                className="input input-bordered w-full max-w-xs" 
                            />
                        </div>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea 
                                placeholder="massage review" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("description", {
                                    required: {
                                    value: true,
                                    message: 'Description is required'  
                                    },
                                    minLength: {
                                    value: 30,
                                    message: 'Must be 30 characters longer'
                                    }
                                })}
                            ></textarea>
                            <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            {errors.description?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input 
                                type="number" 
                                placeholder="Rating" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("rating", {
                                    required: {
                                    value: true,
                                    message: 'Name is required'  
                                    },
                                })}
                            />
                            <label className="label">
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full uppercase font-bold max-w-xs' type="submit" value="Add"  />
                    </form>
                </div>
            </div>
        </div>
        </div>

    );
};

export default AddReview;