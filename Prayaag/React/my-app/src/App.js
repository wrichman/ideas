import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "./Components/Header.jsx";
import Inventory from "./Components/Inventory.jsx";
import Order from "./Components/Order.jsx";
import fishes from "./sampleFishes.js";
import { wait } from "./helpers.js";

const getData = async () => {
  await wait(1500);
  return fishes;
}

function App() {

  const navigate = useNavigate('/');

  const [ fishes, setFishes ] = useState({});
  const [ order, setOrder ] = useState({});

  useEffect(() => {
    const collectData = async () => {
      const data = await getData();
      setFishes(data);
    }

    collectData();
  }, []);


  const updateOrder = (key, qty) => {
    if (typeof(order) != "object") {
      console.log(typeof(order));
      console.error("not an object")
      return;
    }

    setOrder(prev => {
      const newOrder = {...prev};
      if (key in newOrder) newOrder[key] += 1;
      else newOrder[key] = 1;
      return newOrder;
    });
  }

  return (
    <div className="catch-of-the-day">
      <button onClick = {() => navigate('/')}>---Go Back---</button>

      <div className = "menu">
        <Header tagline = "Fresh Seafood Market"> </Header>
      </div>
      <React.StrictMode>
      <Inventory fishes = {{...fishes}} updateOrder = {updateOrder} ></Inventory>
      </React.StrictMode>

      <Order fishes = {{...fishes}}></Order>

    </div>
  );
}

export default App;
