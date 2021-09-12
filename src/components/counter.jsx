import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps:', prevProps);
        console.log('prevState:', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('counter unmounted');
    }
  
    styles = {
        fontSize: '50px',
        fontWeight: 'bold',
        display: 'inline-block'
    };

    products = {
        fontSize: '50px',
        minWidth: 300,
        display: 'inline-block'
    };

    render() { 
        //console.log(this.props);
        console.log('counter rendered'); 

        return ( 
            <div>
                
                <div style={this.products}>
                    {this.props.counter.product_name}
                </div>
                
                <span 
                    style={this.styles} 
                    className={this.getBadgeClasses()}> { this.formatCount() } 
                </span> 
                
                <button 
                    //onClick={ () => this.handleIncrement(product)}
                    onClick={ () => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    +
                
                </button>
                
                {" "}

                <button 
                    //onClick={ () => this.handleIncrement(product)}
                    onClick={ () => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    -
                
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
        return count === 0 ? "0" : count;
    }
}
 
export default Counter;