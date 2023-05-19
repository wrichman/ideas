import React from "react";
import { formatPrice } from "../helpers"

function Fish({ details, addToOrder, index }) {
  const isAvailable = details.status === "available";

  const handleClick = () => {
    addToOrder(index);
  }
  
  return (
    <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">{details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button disabled={!isAvailable} onClick={handleClick}>{isAvailable ? 'Add To Cart' : 'Sold Out'}</button>
    </li>
  );
}

export default Fish;