import React, { useState } from 'react'

const StorePicker = ({ placeH }) => {
    
    const [ store, setStore ] = useState('');

    const goToStore = (e) => {
        
        e.preventDefault();
    }
    
    function getStore() {
        if (store === '') return '<--';
        else if (store.length > 10) return `Visit ${store.substring(0, 10)}...`;
        else return `Visit ${store}`;
    }

    return (
    <div id = "form">
        <form className = "store-selector" onSubmit = {goToStore}>
            <input onChange = {e => setStore(e.target.value)} className = "m-2" type = "text" required placeholder = {placeH}></input>
            <button type = "submit">{getStore()}</button>
        </form>
    </div>
  )
}

StorePicker.defaultProps = {
    placeH : "Enter a Store",
}

export default StorePicker