import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component{


    static propTypes = {
        fish: PropTypes.shape({
            image:  PropTypes.string,
            this:   PropTypes.string,
            name:   PropTypes.string,
            desc:   PropTypes.string,
            status: PropTypes.string,
            price:  PropTypes.number,
        }),
        index: PropTypes.string,
        updatedFish: PropTypes.func
    }

handleChange = (event) => {
    //update that fish
    //1. take a copy of the current fish
    const updatedFish = {
        ...this.props.fish, 
        [event.currentTarget.name]: event.currentTarget.value,

    };
    this.props.updatedFish(this.props.index,updatedFish)


}



    render(){
        return (<div className='fish-edit'>  
        <input type='text' name='name '  onChange={this.handleChange}value={this.props.fish.name}/>
        <input type='text' name='price ' onChange={this.handleChange}value={this.props.fish.price}/>
        <select type='text' name='status' onChange={this.handleChange}value={this.props.fish.status}>
            <option alue='available'>Fresh!</option>  
            <option alue='unavailable'>Sold Out!</option> 
        </select>
        
        <textarea name='desc'onChange={this.handleChange}value={this.props.fish.desc} />
        <input type='text' name='image' onChange={this.handleChange}value={this.props.fish.image }/>
        

        <button onClick = {( )=> this.props.deleteFish(this.props.index)}>Remove Fish
        
        </button>
        
         </div>
        )

         
    }

}


export default EditFishForm;  