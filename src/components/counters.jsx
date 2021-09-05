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
        zzz: "0 deletions"
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        // console.log(counters[index]);
        this.setState({ counters });
    };

    handleDelete = (counterID) => {
        // console.log('delete called', counterID);
        const counters = this.state.counters.filter(c => c.id !== counterID);
        const id_deleted = counterID
        this.setState({counters});
        this.setState({zzz: "deleted id: " + id_deleted});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    render() { 
        return ( 
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                { this.state.counters.map (counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncrement}
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