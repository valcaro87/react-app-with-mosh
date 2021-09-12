import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends React.Component {
  state = {  
      counters: [
          { id: 1, value: 0},
          { id: 2, value: 4},
          { id: 3, value: 0},
          { id: 4, value: 0}
      ],
      //zzz: "0 deletions"
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
      //this.setState({zzz: "deleted id: " + id_deleted});
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
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c=> c.value >0).length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
