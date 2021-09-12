import React, { Component } from 'react'
import Counter from './counter';


class Counters extends Component {
    
    render() { 
        console.log('counters rendered'); 
        
        const { onReset, counters, onDelete, onIncrement, onZZZ } = this.props;

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
                        // value={counter.value} 
                        // id={counter.id} 
                        // selected={true}
                        counter={counter}
                    >
                       
                    </Counter> 
                
                ))}
                <h1>{onZZZ}</h1>
            </div> 
        );
    }
}
 
export default Counters;