import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "./Components/Header.jsx";
import Inventory from "./Components/Inventory.jsx";
import Order from "./Components/Order.jsx";

function App() {

  const navigate = useNavigate('/');
  const [ state, setState ] = useState({
    order : {},

  })

  const updateOrder = (key, val) => {
    const { order } = state;
    if (key in order) order[key] += val;
    else order[key] = 1;
    setState({ order : order });
  }

  return (
    <div className="catch-of-the-day">
      <button onClick = {() => navigate('/')}>---Go Back---</button>

      <div className = "menu">
        <Header tagline = "Fresh Seafood Market"> </Header>
      </div>

      <Inventory order = {state.order} updateOrder = {updateOrder} ></Inventory>

      <Order></Order>

    </div>
  );
}

export default App;
