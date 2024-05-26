import React from "react";
import PropTypes from 'prop-types';

class AddFishForm extends React.Component{

nameref = React.createRef();
priceref = React.createRef();
statusref = React.createRef();
imageref = React.createRef();
descref = React.createRef();

static propTypes = {
    addFish: PropTypes.func
}
  createFish = (event) => {


      event.preventDefault(); //stops the form from submitting

      const fish = {
        name:  this.nameref.value.value,
        price: parseFloat(this.priceref.value.value), //store this as a number not a string
        status:this.statusref.value.value,
        desc:this.descref.value.value,
        image:this.imageref.value.value,
      };
      this.props.addFish(fish)
      //refresh the form

      event.currentTarget.reset();
     
};





    render() {
        return ( 
          <form className="fish-edit" onSubmit={this.createFish}>
            <input name= "name" ref={this.nameref} type="text" placeholder="Name"/>
            <input name= "price" ref={this.priceref} type="text" placeholder="Price" />
            <select 
              name= "status" ref={this.statusref}>
              <option value="availible">Fresh!</option> 
              <option value="unavailible">Sold Out!</option> 
              </select>

              
            <textarea name= "desc" ref={this.descref} type="text" placeholder="Desc"> </textarea>

            <input name= "image" ref={this.imageref} type="text" placeholder="Image" />

            <button type="submit">+ Add Fish</button>
          
          </form>
            
        );
    }
}

export default AddFishForm;