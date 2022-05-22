import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusnessSummery from './BusnessSummery';
import Review from './Review';
import Tools from './Tools';


const Home = () => {
    return (
        <>
        <div className='mx-4 md:mx-8 lg:mx-16'>
            <Banner></Banner>
            <Tools></Tools>
            <Review />
            <BusnessSummery />
        </div>
        <Footer />
        </>
    );
};

export default Home;