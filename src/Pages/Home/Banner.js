import React from 'react';
import banner from '../../assets/images/tools-banner (3).jpg'

const Banner = () => {
    return (
        <div>
            <div class="hero my-8 mx-4 md:mx-8 lg:mx-16">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} class="max-w-md" />
                    <div className=''>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6 w-3/4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;