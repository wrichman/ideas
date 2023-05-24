import React from 'react';
import { formatPrice } from '../helpers';

function OrderCard({ fish, qty }) {
  return (
    <div className='m-2 order-card'>
      <h3>{fish.name} </h3>
      <p>Cost : {formatPrice(fish.price)} x {qty} = {formatPrice(fish.price * qty)}</p>
    </div>
  )
}

export default OrderCard;
