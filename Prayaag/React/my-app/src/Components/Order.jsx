import React from 'react';
import OrderCard from './OrderCard.jsx';

function Order({ fishes, order }) {
  
  
  return (
    <>
    <div className = "m-3 order-container">
      <h1>Your Order</h1>
    </div>
    <div className="m-3 items-container">
      <ul>
        {/* {Object.keys(fishes).map(key => <li key = {key}>{fishes[key]}</li>)} */}
      </ul>
    </div>
    </>
    
  )
}

export default Order;