import React from 'react';
import logo1 from '../../assets/icons/2(4).png'
import logo2 from '../../assets/icons/1(4).png'
import logo3 from '../../assets/icons/3(4).png'
import logo4 from '../../assets/icons/4(3).png'

const BusnessSummery = () => {
    const summery = [
        {
            img: logo1,
            name: 'Countries',
            quantity: 72
        },
        {
            img: logo2,
            name: 'complete project',
            quantity: 172
        },
        {
            img: logo3,
            name: 'Happy Clients',
            quantity: 292
        },
        {
            img: logo4,
            name: 'Feedbacks',
            quantity: 345
        },
    ]
    return (
        <div className='my-10'>
            <h1 className='text-center text-secondary uppercase font-bold text-3xl md:text-5xl my-5' data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="800">millions business trust us</h1>
            <h1 className='text-center text-primary uppercase md:text-2xl my-5' data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="800">try to understands user expectation</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    summery.map(items => <div className="text-center border hover:border-blue-900 transition rounded-xl mt-5 p-3" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                        <div className="w-[80px] mx-auto">
                            <img src={items.img} className='w-full' alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-4xl font-bold text-primary my-3'>{items.quantity}</h1>
                            <h1 className='text-xl text-purple-500 font-bold'>{items.name}</h1>
                        </div>
                    </div>)
                }
            </div>
            <div className="sm:flex my-5 border shadow-lg rounded-xl items-center p-8">
                <div className="sm:w-[50%]" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                <h1 className='text-xl md:text-3xl text-secondary font-bold'>Have any question about us for get a product request..?</h1>
                <h1 className='md:text-xl text-primary'>don't hesitate to contact us</h1>
                </div>
                <div className="sm:w-[50%] mx-auto" data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="800">
                    <button className='btn btn-secondary text-white my-3 sm:mx-5'>Request for Quote</button>
                    <button className='btn ml-3 text-white'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default BusnessSummery;