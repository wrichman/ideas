import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class Counter extends React.Component {
    
    state = { count : 0 };

    render() {
        return (
            <div>
                <span className = {"badge m-1 bg-" + this.getBadgeClasses()}>{this.getCounterValue()}</span>
                <button onClick = {this.handleInc} className = 'btn m-1 btn-secondary'>+</button>
                <button onClick = {this.handleDec} className = 'btn m-1 btn-danger'>-</button>

            </div>
        );
    }

    handleInc = () => {
        this.setState( { count : this.state.count + 1 } );
    }

    handleDec = () => {
        this.setState( { count : this.state.count - 1 } );
    }

    getCounterValue() {
        return (this.state.count === 0 ? "Zero" : this.state.count);
    }

    getBadgeClasses() {
        if (this.state.count < 0) return "danger";
        else if (this.state.count === 0) return "warning";
        else return "primary";
    }

}

