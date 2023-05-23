import React, { useState, useRef, useEffect } from 'react'
import FishCard from "./FishCard";
import fishes from "../sampleFishes.js";
import { wait } from "../helpers.js";
import "bootstrap/dist/css/bootstrap.css"
import { render } from '@testing-library/react';

// emmulating getting data from api
const getData = async () => {
  await wait(1500);
  return fishes;
}

function Inventory() {
  
  const [ fishList, setFishList ] = useState([]);
  const searchItem = useRef('');

  useEffect(() => {

    const collectData = async () => {
      const data = await getData();
      setFishList(Object.values(data));
    }

    collectData();
  }, [])

  useEffect(() => {}, [searchItem])

  const renderFishList = () => {
    if (fishList.lengh === 0) {
      return "Loading... Please Wait.";
    } else {
      
    }

  }

  return (
    <div>
      <input onChange = {e => searchItem.current = e.target.value} className = "m-2" placeholder="What fish do you want?"></input>
      <div className='fish-list'>
        {renderFishList()}
      </div>
    </div>
  )
}

export default Inventory