import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { getFunName } from '../helpers.js';

const StorePicker = () => {
    
    const navigate = useNavigate();
    const [ store, setStore ] = useState('');
    const renderCount = useRef(0);
    
    const goToStore = (e) => {
        
        e.preventDefault();
        const path = store.trim().replace(/ /g, '-');
        navigate(`/store/${path}`);
    }
    
    function getStore() {
        if (store === '') return '<--';
        else if (store.length > 10) return `Visit ${store.substring(0, 10)}...`;
        else return `Visit ${store}`;
    }

    useEffect(() => {renderCount.current++}, [store]);

    return (
    <>  
        <div id = "form">
            <form className = "store-selector" onSubmit = {goToStore}>
                <input onChange = {e => setStore(e.target.value)} placeholder = {getFunName()} className = "m-2" type = "text" required></input>
                <button type = "submit">{getStore()}</button>
            </form>
        </div>
        <span>Render Count : {renderCount.current}</span>
    </>
  )
}



StorePicker.defaultProps = {
    placeH : "Enter a Store",
}

export default StorePicker