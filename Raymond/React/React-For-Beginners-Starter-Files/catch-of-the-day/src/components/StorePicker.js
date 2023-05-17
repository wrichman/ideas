import React from 'react';

class StorePicker extends React.Component {
  // each react class needs a render
  render() {
    return (
      <form className='store-selection'>
        { /* comment */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder='Store Name'/>
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

// gives other files access
export default StorePicker;