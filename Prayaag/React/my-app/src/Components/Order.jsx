import React from 'react';
import OrderCard from './OrderCard.jsx';
import { formatPrice } from '../helpers.js';

function Order({ fishes, order }) {
  
  const getTotal = () => {
    let total = 0;
    Object.keys(order).forEach((fish) => {
      total += (fishes[fish].price * order[fish]);
    })
    return total;
  }

  const formatTotal = () => {
    let total = getTotal();
    if (total === 0) return '';
    else return `Total : ${formatPrice(total)}`;
  }
  
  return (
    <>
    <div className = "m-3 order-container">
      <h1>Your Order</h1>
    </div>
    <div className="m-3 items-container">
      <ul>
        {Object.keys(order).filter(key => order[key] !== 0).map(fish => <OrderCard fish = {fishes[fish]} qty = {order[fish]}></OrderCard>)}
      </ul>
      <span className='m-5'>{formatTotal()}</span>
    </div>
    </>
    
  )
}

export default Order;