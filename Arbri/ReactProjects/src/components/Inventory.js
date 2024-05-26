import React from "react";
import PropTypes from 'prop-types';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
class Inventory extends React.Component{

static PropTypes ={
    fishes:     PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
}

    render() {
        return ( 
            <div className="inventory">Inventory
            <h2>Inventory</h2>
            {Object.keys(this.props.fishes).map(key => 
            <EditFishForm 

            fish = {this.props.fishes[key]} 
            updateFish = {this.props.updateFish} 
            key = {key}
            index = {key}
            deleteFish={this.props.deleteFish}

            />)}
            <AddFishForm addFish ={this.props.addFish}/>
            <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>

            
        )
    }
}

export default Inventory;