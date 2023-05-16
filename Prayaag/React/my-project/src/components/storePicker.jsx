import React, { useState } from 'react'

const StorePicker = (props) => {
    
    const { placeH } = props;
    const [ store, setStore ] = useState('');
    
    function getStore() {
        if (store === '') return '<--';
        else if (store.length > 10) return `Visit ${store.substring(0, 10)}...`;
        else return `Visit ${store}`;
    }

    return (
    <div id = "form">
        <form>
            <input onChange = {e => setStore(e.target.value)} className = "m-2" type = "text" required placeholder = {placeH}></input>
            <button type = "submit">{getStore()}</button>
        </form>
    </div>
  )
}

StorePicker.defaultProps = {
    placeH : "Enter a Store"
}

export default StorePicker