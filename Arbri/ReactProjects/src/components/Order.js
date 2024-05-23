import React from "react";
import { formatPrice } from "../helpers";
class Order extends React.Component{
   
   
   
    renderOrder = key => {
        
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailible = fish.status === "available"

        if (!isAvailible) {
            return <li key = {key}>
                Sorry {fish ? fish.name : 'fish'} is no longer available
            </li>
        }

        return<li key = {key}>
            {count} lbs {fish.name};
            {formatPrice(count * fish.price)};
            </li>;
    }
    
    render() {



        const orderIds = object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailible = fish && fish.status === "available"
            if(isAvailible){
                return prevTotal + (count * fish.price);

            }
            return prevTotal;
        }, 0);

        return ( 
        <div className="order-wrap">Order
            
        <h2>Order</h2>
            <ul className="order">
                {orderIds.map(this.renderOrder)}
            </ul>
            {orderIds}
            <div className="total">
                <strong>{formatPrice(total)}</strong>
            
            </div>
        </div>
            
        )
    }
}

export default Order;