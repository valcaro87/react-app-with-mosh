import React, { Component } from 'react';

class Counter extends Component {
    statez = { 
        count: 1,
        tags: ['tag1','tag2','tag3']
       
    };

    styles = {
        fontSize: '50px',
        fontWeight: 'bold'
    }

    // constructor() {
    //     super();
    //     //console.log('construction', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        console.log('increment clicked', this);
    }

    render() { 
        
        return ( 
            <div>
               
                <span style={this.styles} className={this.getBadgeClasses()}> { this.formatCount() } </span>
                <h1></h1> 
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                
                </button>
                
                <ul>
                    {this.statez.tags.map(tag=> <li key={tag}>{ tag }</li>)}
                </ul>
            </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.statez.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.statez;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;