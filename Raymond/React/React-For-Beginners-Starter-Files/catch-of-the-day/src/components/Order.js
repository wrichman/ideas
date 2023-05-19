import React from 'react'
import { formatPrice } from '../helpers';

function Order({ fishes, order }) {
  const renderOrder = (key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish.status === "available";
    if (!isAvailable) {
      return (
        <li key={key}>Sorry {fish ? fish.name: "fish"} is no longer available</li>
      )
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  }
  const orderIds = Object.keys(order);
  // reduce function is like an accumulator function
  // key is currentValue
  const total = orderIds.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return prevTotal + (count * fish.price);
    }
    return prevTotal;
  }, 0);
  return (
    <div className='order-wrap'>
      <h2>Order</h2>
      <ul className='order'>{orderIds.map(renderOrder)}</ul>
      <div className='total'>
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  )
}

export default Order;