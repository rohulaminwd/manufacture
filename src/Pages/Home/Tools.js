import React from 'react';
import ToolsCard from './ToolsCard';
import parts1 from '../../assets/images/parts (1).jpg'
import parts2 from '../../assets/images/parts (2).jpg'
import parts3 from '../../assets/images/parts (3).jpg'

const Tools = () => {
    const products = [
        {
            _id: 1,
            name: "Car while",
            title: " New balce fress from car prats this is nice car tools",
            price: 170,
            img: parts1,
            min_quantity: 20,
            max_quantity: 190,
        },
        {
            _id: 2,
            name: "Car while",
            title: " New balce fress from car prats this is nice car tools",
            price: 170,
            img: parts2,
            min_quantity: 20,
            max_quantity: 190,
        },
        {
            _id: 3,
            name: "Car while",
            title: " New balce fress from car prats this is nice car tools",
            price: 170,
            img: parts3,
            min_quantity: 20,
            max_quantity: 190,
        },
    ]
    return (
        <div className='my-10'>
        <h1 className='text-center font-bold text-primary uppercase text-2xl mb-5'>Car Purts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map(tool => <ToolsCard
                    key={tool._id}
                    tool={tool}
                ></ToolsCard>)
            }
        </div>
        </div>
    );
};

export default Tools;