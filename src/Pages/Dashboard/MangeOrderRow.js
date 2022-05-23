import React, { useEffect, useState } from 'react';

const DoctorRow = ({product, index, setDeletingModal}) => {
    const {name, price, email, img, quantity, productName,} = product;

    useEffect(() => {
        setStatus('pending')
    }, [product]);

    const [status, setStatus] = useState('');

    const handlePay = status => {
        setStatus(status)
    }
    return (
        <tr>
            <td className='font-bold'>{index + 1}</td>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-20 h-20">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{productName}</div>
                        <h1 className='font-bold'>Price: <span className='text-primary'>{price}</span></h1>
                        <h1 className='font-bold'>Quantity: <span className='text-primary'>{quantity}</span></h1>
                    </div>
                    
                </div>
            </td>
            <td>
                <div className="">
                    <h1 className=''>{name}</h1>
                    <h1 className=''>{email}</h1>
                </div>
            </td>
            <th>
                {  (status === 'pending') && <label onClick={() => handlePay('shipt')}  class="btn btn-secondary text-white btn-xs">{status}</label>}
                {  (status === 'shipt') && <label class="btn btn-success text-white btn-xs">{status}</label> }
            </th>
        </tr>
    );
};

export default DoctorRow;