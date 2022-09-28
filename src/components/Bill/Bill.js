import React from 'react';
import './Bill.css'

const Bill = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(let e of cart){
        quantity = quantity+ e.quantity;
        total = total + (e.price * quantity);
        shipping = shipping + e.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    let grandTotal = total + shipping + parseFloat(tax);
    console.log(cart);
    return (
        <div className='bill'>
            <h4>Order Summary</h4>
            <div className='details'>
                <p>Total products : {quantity}</p>
                <p>Total Price : $ {total}</p>
                <p>Shipping Charge : $ {shipping}</p>
                <p>Tax : $ {tax}</p>
                <h4>Grand Total : $ {grandTotal}</h4>
            </div>
            <button>Clear Cart</button><br />
            <button>Review Order</button>
        </div>
    );
};

export default Bill;