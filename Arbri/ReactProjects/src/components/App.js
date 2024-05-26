import React from 'react';
import PropTypes from 'prop-types';
import Header from './Order';
import Header from './Header';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
class App extends React.Component{
   
   state = {
      fishes: {},
      order: {},
   };

   static propTypes = {
    match: propTypes.object
   }

   componentDidMount(){

    const { params } = this.props.match
    const localStorageRef = localStorage.getItem(params.storeId); 

    if (localStorageRef){

        this.setState({order: JSON.parse(localStorageRef)}); 
    }

     this.ref = base.syncState(`${params.storeId}/fishes`, 
     {context: this, 
     state: 'fishes'});
   }


   componentDidUpdate(){
    localStorage.setItem(this.props.match.params.storeId, JOSN.stringify(this.state.order));

   }





   componentWillUnmount(){
    base.removeBinding(this.ref);
   }



    



   addFish = fish => {
        //To update state
        //1. Take a copy of the existing state (you never want to directly modify state)

        const fishes = {...this.state.fishes};

        //2. Add new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;

        //3. set the new fishes object to state
        this.setState({
            fishes: fishes
        });

   };

   updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes};

    fishes[key] = updatedFish; 

    this.setState( { fishes: fishes});
   }

   deleteFish = (key) => {
    const fishes = {...this.state.fishes};

    fishes[key] = null;

    this.setState({fishes});
   }

   loadSampleFishes = () => {

        this.setState({fishes: sampleFishes});
   };

   addToOrder = (key) => {
    //1. take a order of state

    const order = {...this.state.order};

    //2. either add to the order, or update the number in our order

    order[key] = order[key] + 1 || 1;

    this.setState({order});

   }

   removeFromOrder = (key) => {
     
    //1. take a order of state

     const order = {...this.state.order};

     //2. remove that item from order

     delete order[key];

 
     this.setState({order});
   }
    
    
    render(){
        return ( 
            <div className='catch-of-the-day'>
             <div className='menu'>
                <Header tagline="Fresh Seafood Market"> </Header>
                <ul className='fishes'>
                    {Object.keys(this.state.fishes).map(key => 
                    <Fish 
                    key={key} 
                    index = {key}
                    details ={this.state.fishes[key]} 
                    addToOrder = {this.addToOrder}
                    
                />)}
                    

                </ul>
             </div>

             <Inventory 
             addFish={this.addFish} 
             loadSampleFishes = {this.loadSampleFishes} 
             fishes = {this.state.fishes}
             updateFish = {this.updateFish}
             deleteFish = {this.deleteFish}
              />
             
             <Order fishes={this.state.fishes} order={this.state.order}
             removeFromOrder = {this.removeFromOrder}  />
            </div>
        )
    }
}



export default App;