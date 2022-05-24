import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ParchesModal from './ParchesModal';

const Parches = () => {
    const {id} = useParams()
    const [user, loading] = useAuthState(auth);
    console.log(id)
    const {data: product, isLoading, refetch} = useQuery('product', () => fetch(`https://arcane-journey-12889.herokuapp.com/product/${id}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    const {img, name, description, max_quantity, min_quantity, price} = product;
    refetch()
    const minQuantity = parseInt(product?.min_quantity)
    const maxQuantity = parseInt(product?.max_quantity)

    useEffect(() => {
        setQuantity(minQuantity)
    }, [product, minQuantity])

    const [quantity, setQuantity] = useState(minQuantity);
    const [modalOrder, setOrder] = useState(true)

    if(isLoading || loading){
        return <Loading />
    }
    

    const handleQuantity = (condition) => {
        if(condition === true){
            if(quantity >= max_quantity){
                return setQuantity(maxQuantity), toast.warn(`Maximum Order Quantity: ${maxQuantity}`)
            }
            setQuantity(quantity + 1)
        }
        if(condition === false){
            if(quantity <= min_quantity){
                return setQuantity(minQuantity), toast.warn(`Minimum Order Quantity: ${minQuantity}`);
            }
            setQuantity(quantity - 1)
        }
    }

    const totalPrice = quantity * parseInt(price)

    
    const order = {
        productName: name,
        price: totalPrice,
        quantity: quantity,
        email: user?.email,
        name: user?.displayName,
        img: img,

    }
    


    return (
        <div className='mt-20 mx-4 md:mx-8 lg:mx-16'>
            <div class="grid lg:w-[80%] mx-auto grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center py-4">
                <div class="p-4" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                    <h2 class="text-2xl text-primary font-bold">{name}</h2>
                    <p className='text-md'>{description}</p>
                    <h1 className='text-2xl text-primary'>Price: <span className='text-accent font-bold'>${price}</span></h1>
                    <div className="">
                        <p className='font-bold '>Available Quantity: <span className='text-xl text-primary'>{max_quantity}</span></p>
                    </div>
                    <div className="">
                        <p className='font-bold '>Minimun Order Quantity: <span className='text-xl text-primary'>{minQuantity}</span></p>
                    </div>
                    <div className="md:flex mt-4 pt-3 border-t-2 justify-between items-center">
                        <div className="">
                            <h1 className='text-xl font-bold'>Order Quantity : <span className='text-primary'>{quantity}</span> </h1>
                            <h1 className='text-xl font-bold'>Total Price : <span className='text-accent'>${totalPrice}</span> </h1>
                        </div>
                        <div className="flex ml-4 justify-center items-center shadow-sm border-blue-900 border-x-4 rounded-3xl border py-2">
                            <span onClick={() => handleQuantity(false)} className='pl-4 font-bold cursor-pointer text-xl'>-</span>
                            <span className='px-4 font-bold text-primary text-xl'>{quantity}</span>
                            <span onClick={() => handleQuantity(true)} className='pr-4 cursor-pointer font-bold text-xl'>+</span>
                        </div>
                    </div>
                    <label for="order-modal" class="btn modal-button mt-5 mx-auto">Order now</label>
                </div>
                <div className='h-full w-full mx-auto' data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="800">
                    <img src={img} className='w-full' alt="Movie"  />
                </div>
            </div>
            {modalOrder && <ParchesModal setOrder={setOrder} order={order}></ParchesModal>}
        </div>
    );
};

export default Parches;