import React from 'react'
import AddFishForm from './AddFishForm';

function Inventory({ addFish, loadSampleFishes }) {
  return (
    <div className='inventory'>
      <h2>Inventory</h2>
      <AddFishForm addFish={addFish}/>
      <button onClick={loadSampleFishes}>Load Sample Fishes</button>
    </div>
  )
}

export default Inventory;