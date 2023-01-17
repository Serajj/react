import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = { title: 'Best App' };
}
	
  render() {
    return (
      <h1>
        <Form login="0" />
      </h1>
    );
  }
}

export default App;
