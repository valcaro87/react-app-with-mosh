import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     count: this.props.counter.value
    //     //tags: ['tag1','tag2','tag3']
    // };

    styles = {
        fontSize: '50px',
        fontWeight: 'bold'
    };

    // constructor() {
    //     super();
    //     //console.log('construction', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = (product) => {
    //     //console.log(product);
    //     //this.props.value = 0;
    //     this.setState({ count: this.state.count + 1 });
    // };

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 });
    // }

    render() { 
        //console.log(this.props);

        return ( 
            <div>
                <h4>
                    {this.props.id}
                </h4>
                
                <span 
                    style={this.styles} 
                    className={this.getBadgeClasses()}> { this.formatCount() } 
                </span> 
                
                <button 
                    //onClick={ () => this.handleIncrement(product)}
                    onClick={ () => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment++
                
                </button>

                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                > 
                    Delete 
                </button>
                
                {/* <ul>
                    {this.state.tags.map(tag=> <li key={tag}>{ tag }</li>)}
                </ul> */}
            </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const count = this.props.counter.value;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;