import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'


class App extends Component {
  render() { 
    return (
      <div className="App">
        <Header />
        <Main features={this.props.features}/>
      </div>
    );
  }
}

export default App;  
