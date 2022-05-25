import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardErr, setCardErr] = useState()
    

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!stripe || !elements){
            return
        }

        const card = elements?.getElement(CardElement);
        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

        if(error){
            setCardErr(error.message);
        }else{
            setCardErr('');
        }  
    } 

    return (
        <div>
            <h1>CheckoutForm</h1>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button className='btn btn-secondary btn-xs my-3 text-white' type="submit" disabled={!stripe}>
                    Pay now
                </button>
            </form>
            { cardErr && <p className='text-red-500'>{cardErr}</p>}
        </div>
    );
};

export default CheckoutForm;