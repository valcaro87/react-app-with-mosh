import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends React.Component {
  state = {  
      counters: [
          { id: 1, value: 0, product_name: "Shoes"},
          { id: 2, value: 0, product_name: "Bag"},
          { id: 3, value: 0, product_name: "Shirt"},
          { id: 4, value: 0, product_name: "Pants"}
      ],
      zzz: "0 deletions"
  };

  constructor(props) {
    super(props);
    // console.log('App = Constructor', this.props);
    //this.state = this.props.something;
    console.log('App = Constructor #order#1');
  }

  componentDidMount() {
    // ajax call
    //this.setState({ movies })
    console.log('App mounted #order#3');
  }

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value <= 0) {
      counters[index].value = 0
    }
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
    console.log ('App rendered #order#2');
    const total=(this.state.counters.reduce((total,currentItem) =>  total = total + currentItem.value , 0 ));
    //console.log (total);

    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c=> c.value >0).length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDelete}
            onZZZ={total}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
