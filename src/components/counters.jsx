import React, { Component } from 'react'
import Counter from './counter';


class Counters extends Component {
    
    render() { 
        console.log('counters rendered'); 
        
        const { onReset, counters, onDelete, onIncrement, onDecrement, onZZZ } = this.props;

        return ( 
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                { counters.map (counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    >
                       
                    </Counter> 
                
                ))}
                <hr />
                <h1>Total: {onZZZ}</h1>
            </div> 
        );
    }
}
 
export default Counters;