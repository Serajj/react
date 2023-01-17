import React from 'react';
import './App.css';
class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = { title: 'Best App' };
}
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

export default App;
