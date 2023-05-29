import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
// import firebaseApp from "../base";
// import { ref } from "firebase/database";
// import "firebase/database"

function App() {
  // state gets value, setState is function
  const [state, setState] = useState({
    fishes: {},
    order: {}
  });

  const { storeId } = useParams();
  console.log(storeId);

  // useEffect(() => {
  //   firebaseApp.database()
  //     .ref(`${storeId}/fishes`)
  //     .on('value', (snapshot) => {
  //       if (snapshot.val())
  //         setState((prev) => {
  //           return {
  //             ...prev,
  //             fishes: snapshot.val()
  //           };
  //         });
  //     });
  // }, []);

  // useEffect(() => {
  //   firebaseApp.database().ref(`${storeId}/fishes`).update(state.fishes);
  // }, [state.fishes]);


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

  const addToOrder = (key) => {
    // 1. take copy of state
    const order = {...state.order};
    // 2. add to order or update number
    order[key] = order[key] + 1 || 1;
    // 3. setstate
    setState(prevState => ({
      ...prevState,
      order: order,
    }));
  }

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market"/>
        <ul className="fishes">
          {Object.keys(state.fishes).map(key => <Fish key={key} index={key} details={state.fishes[key]} addToOrder={addToOrder}/>)}
        </ul>
      </div>
      <Order fishes={state.fishes} order={state.order}/>
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes}/>
    </div>
  )
}

export default App;