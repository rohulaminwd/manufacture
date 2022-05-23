import React from 'react';
import ToolsCard from './ToolsCard';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const Tools = () => {
    const {data: products, isLoading} = useQuery('product', () => fetch('http://localhost:5000/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading />
    }
    return (
        <div className='my-10'>
        <h1 className='text-center font-bold text-primary uppercase text-2xl mb-5'>Car Purts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products?.map(tool => <ToolsCard
                    key={tool._id}
                    tool={tool}
                ></ToolsCard>)
            }
        </div>
        </div>
    );
};

export default Tools;