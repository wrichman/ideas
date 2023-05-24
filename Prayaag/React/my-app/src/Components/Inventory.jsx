import React, { useState } from 'react'
import FishCard from "./FishCard";

import "bootstrap/dist/css/bootstrap.css"

function Inventory({ fishes, updateOrder }) {
  const [ searchItem, setSearchItem ] = useState("");  

  const renderFishList = () => {
    if (Object.keys(fishes).length === 0) {
      return <p className = "m-2">Loading... Please Wait</p>;
    } else {
      const fishIds = Object.keys(fishes).filter(fish => fishes[fish].name.toLowerCase().includes(searchItem.toLowerCase())); 
      console.log(fishIds, searchItem);
      return fishIds.map((fish, id) => <FishCard fishKey = {fish} key = {id} fish = {fishes[fish]} updateOrder = {updateOrder}></FishCard>);
    }

  }

  return (
    <div>
      <div className='fish-input-and-button'>
      <input onChange = {e => setSearchItem(e.currentTarget.value)} className = "m-2" placeholder="What fish do you want?"></input>
      <button>Go to Cart</button>
      </div>
      <div className='fish-list'>
        {renderFishList()}
      </div>
    </div>
  )
}

export default Inventory;