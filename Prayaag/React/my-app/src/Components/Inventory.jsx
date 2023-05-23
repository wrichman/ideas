import React, { useState, useRef, useEffect } from 'react'
import FishCard from "./FishCard";
import fishes from "../sampleFishes.js";
import { wait } from "../helpers.js";
import "bootstrap/dist/css/bootstrap.css"

// emmulating getting data from api
const getData = async () => {
  await wait(1500);
  return fishes;
}

function Inventory({ order, updateOrder }) {
  
  const [ fishList, setFishList ] = useState([]);
  const [ searchItem, setSearchItem ] = useState("");

  useEffect(() => {
    const collectData = async () => {
      const data = await getData();
      setFishList(Object.values(data));
    }

    collectData();
  }, [])

  const renderFishList = () => {
    if (fishList.length === 0) {
      return <p>Loading... Please Wait</p>;
    } else {
      let fishes = fishList;

      if (searchItem !== "") {
        fishes = fishes.filter(fish => fish.name.toLowerCase().includes(searchItem.toLowerCase())); 
      } 
    
      fishes = fishes.map((fish, id) => <FishCard fishKey = {`${fish}${id + 1}`} key = {id} fish = {fish} order = {order} updateOrder = {updateOrder}></FishCard>);

      return fishes;
    }

  }

  return (
    <div>
      <div className='fish-input-and-button'>
      <input onChange = {e => setSearchItem(e.target.value)} className = "m-2" placeholder="What fish do you want?"></input>
      <button>Go to Cart</button>
      </div>
      <div className='fish-list'>
        {renderFishList()}
      </div>
    </div>
  )
}

export default Inventory