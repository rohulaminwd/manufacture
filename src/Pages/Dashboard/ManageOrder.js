import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MangeOrderRow from './MangeOrderRow'

const ManageOrder = () => {
    const {data: orders, isLoading, refetch} = useQuery('order', () => fetch('https://arcane-journey-12889.herokuapp.com/order', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-xl mb-3 font-bold text-orange-500'>Orders: {orders?.length}</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <MangeOrderRow
                            key={order._id}
                            product={order}
                            index={index}
                            refetch={refetch}
                            ></MangeOrderRow>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </tfoot>
                    
                </table>    
            </div>
        </div>
    );
};

export default ManageOrder;