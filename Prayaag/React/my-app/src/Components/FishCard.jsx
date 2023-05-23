import React from 'react'

import { formatPrice } from "../helpers.js";
import "bootstrap/dist/css/bootstrap.css"
import "../index.css";

const getStatusClass = (status) => {
    return (status === "available" ? "badge bg-primary m-1" : "badge bg-secondary m-1");
}

function FishCard({fish}) {
    return (
        <div className = "m-3 fishCard">
                <h3 className = "fishTitle">{fish.name}<p className = "fish-price">Price: {formatPrice(fish.price)}</p></h3>
                <p className = "dish-desc">{fish.desc}</p>
                <p className={getStatusClass(fish.status)}>Status: {fish.status}</p>
        </div>
    )
}

export default FishCard;