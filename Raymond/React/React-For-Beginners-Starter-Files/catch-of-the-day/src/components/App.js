import React, { useState } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

function App() {
  // state gets value, setState is function
  const [state, setState] = useState({
    fishes: {},
    order: {}
  });

  const addFish = fish => {
    const fishes = {...state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    setState(prevState => ({
      ...prevState,
      fishes: fishes,
    }));
  }

  const loadSampleFishes = () => {
    setState(prevState => ({
      ...prevState,
      fishes: sampleFishes
    }))
  }
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market"/>
        <ul className="fishes">
          {Object.keys(state.fishes).map(key => <Fish key={key} details={state.fishes[key]}/>)}
        </ul>
      </div>
      <Order />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes}/>
    </div>
  )
}

export default App;