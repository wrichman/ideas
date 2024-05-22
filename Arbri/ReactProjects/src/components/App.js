import React from 'react';
import Header from './Order';
import Header from './Header';
import Header from './Inventory';


class App extends React.Component{
    render(){
        return ( 
            <div className='catch-of-the-day'>
             <div className='menu'>
                <Header tagline="Fresh Seafood Market"> age = {300}</Header>
             </div>
             <Inventory />
             <Order />
            </div>
        )
    }
}



export default App;