import React from 'react';
import './App.css';
class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = { title: 'Best App', isChanged : true, secondTitle: "New App" };

  this.updateS = this.updateState.bind(this);
}
	updateState(){
    
    this.setState({ isChanged:false});

  }

  componentDidMount(){
    let self=this;
    setTimeout(function() {
      self.setState({isChanged:false}); 
    }, 3000);
    
  }


  render() {
    return (
      <h1>
        <button onClick={this.updateS}>Change</button>
        {this.state.isChanged ? this.state.title : this.state.secondTitle}
      </h1>
    );
  }
}

export default App;
