import React, { Component } from 'react'
import Counter from './counter';


class Counters extends Component {
    state = {  
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 4},
            { id: 3, value: 0},
            { id: 4, value: 0}
        ],
        zzz: "val"
    };

    handleDelete = (counterID) => {
        // console.log('delete called', counterID);
        const counters = this.state.counters.filter(c => c.id !== counterID);
        const id_deleted = counterID
        this.setState({counters});
        this.setState({zzz: "deleted: " + id_deleted});
    };

    render() { 
        return ( 
            <div>
                { this.state.counters.map (counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        // value={counter.value} 
                        // id={counter.id} 
                        // selected={true}
                        counter={counter}
                    >
                       
                    </Counter> 
                
                ))}
                <h1>{this.state.zzz}</h1>
            </div> 
        );
    }
}
 
export default Counters;