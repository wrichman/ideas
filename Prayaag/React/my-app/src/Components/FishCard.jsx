import React, { useState, useEffect } from 'react'

import { formatPrice } from "../helpers.js";
import "bootstrap/dist/css/bootstrap.css"
import "../index.css";

const getStatusClass = (status) => {
    return (status === "available" ? "badge bg-primary m-1" : "badge bg-secondary m-1");
}

function FishCard({fish, fishKey, updateOrder}) {

    const [ qty, setQty ] = useState(0);

    return (
        <div className = "m-3 fishCard">
                <h3 className = "fishTitle">{fish.name}<p className = "fish-price">Price: {formatPrice(fish.price)}</p></h3>
                <p className = "dish-desc">{fish.desc}</p>
                <button onClick = {() => {
                    updateOrder(fishKey);
                    setQty(prev => prev + 1);
                }} disabled = {fish.status !== "available"} className = "btn m-1 btn-primary">+</button>
                <span>{qty}</span>
                <button onClick = {() => {
                    updateOrder(fishKey);
                    setQty(prev => prev - 1);
                }} disabled = {fish.status !== "available" || qty === 0} className = "btn m-1 btn-danger">-</button>
                <p className={getStatusClass(fish.status)}>Status: {fish.status}</p>
        </div>
    )
}

export default FishCard;