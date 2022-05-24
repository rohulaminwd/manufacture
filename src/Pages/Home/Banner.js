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
                <h1 class="md:text-xl text-cyan-500 uppercase font-bold"  data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">POWERFUL AUTO PARTS</h1>
                <h1 class="text-3xl md:text-5xl text-primary font-bold"  data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="800"><span className='text-accent'>Aments</span> Market!</h1>
                <p class="py-6 sm:w-3/4"  data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="800">Keep Your Vehicle in Great Condition with Top Auto Parts, Engineered for your best workout yet, Select YOur auto parts..</p>
                <button class="btn btn-primary"  data-aos="zoom-in-right" data-aos-delay="700" data-aos-duration="800">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;