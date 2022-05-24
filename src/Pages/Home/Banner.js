import React from 'react';
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div class="hero mt-16 lg:py-16 bg-cyan-100 lg:w-full">
            <div class="hero-content mx-4 md:mx-8 lg:mx-16 flex-col lg:flex-row-reverse">
                <div className="">
                 <img src={banner} class=" md:max-w-md " />
                </div>
                <div className=''>
                <h1 class="text-2xl text-cyan-500 uppercase font-bold">POWERFUL AUTO PARTS</h1>
                <h1 class="text-5xl text-primary font-bold"><span className='text-accent'>Aments</span> Market!</h1>
                <p class="py-6 w-3/4">Keep Your Vehicle in Great Condition with Top Auto Parts, Engineered for your best workout yet, Select YOur auto parts..</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;