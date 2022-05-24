import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {AiFillPhone} from  'react-icons/ai'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1 className='text-2xl font-bold text-primary text-center'>My Profile</h1>
            <div class="card w-[100%] mt-16 mx-auto lg:w-[500px] bg-base-100 border-8 border border-blue-200 rounded-2xl shadow-xl">
                <div className="avatar mt-5">
                    <div class="w-28 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <h2 class="text-3xl text-primary font-bold">{user.displayName}</h2>
                    <h2 class="text-xl text-primary font-bold">{user.email}</h2>
                    <p>I am a student of class inter 2nd Year Hazi Nurul Haque Nonni poragong Mointri collage</p>
                    <div class="card-actions">
                    <a href="tel:+0183194559" ><button className='btn btn-primary font-bold btn-sm'><AiFillPhone /> +0183194559 </button></a>
                    <button class="btn btn-sm btn-secondary">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;