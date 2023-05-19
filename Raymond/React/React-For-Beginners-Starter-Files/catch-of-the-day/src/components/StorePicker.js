import React, { useRef } from 'react';
import { getFunName } from '../helpers';
import { useNavigate } from 'react-router-dom';

function StorePicker() {
  // constructor() {
  //   super();
  //   console.log('gonna create a component');
  //   this.goToStore = this.goToStore.bind(this);
  // }
  const myInput = useRef();
  const navigate = useNavigate();

  const goToStore = (event) => {
    // 1. stop form from submitting
    event.preventDefault();
    // 2. get the text from input (sinking your data)
    // (current instead of value)
    const storeName = myInput.current.value;
    // 3. Change the page to /store/wahtever-they-entered
    navigate(`/store/${storeName}`);
  };
  
  // binding in react, we need to bind our own methods
  // componentDidMount() {
  //   console.log('Mounted');
  //   console.log(this);
  // }


  // each react class needs a render
  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <input 
        type="text" 
        ref={myInput}
        required 
        placeholder='Store Name' 
        defaultValue={ getFunName() }
      />
      <button type='submit'>Visit Store</button>
    </form>
  )
}

// gives other files access
export default StorePicker;
