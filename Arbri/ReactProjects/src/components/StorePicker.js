import React from 'react';
import PropTypes from "prop-types"
import { render } from 'react-dom';
import { getFunName } from "../helpers"



class StorePicker extends React.Component {
    
    static PropTypes = {
        history: PropTypes.string
    }
    

    myInput = React.createRef();

        goToStore = (event) => {

            event.preventDefault()          /*prevents the form from refreshing the page */
            console.log(this.myInput.value.value); 

            const store = this.myInput.value.value //grab input from form
            
            this.props.history.push(`/store/${store}`) //used push state to change url

        }
        
       
        render(){

        return (
            
            <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input 
            type="text" 
            ref = {this.myInput}
            required placeholder="Store Name" 
            defaultValue={getFunName()}
            />
           
            <button type="submit">Visit Store</button>
           
            </form>
           
           
        )
    }

}

export default StorePicker;