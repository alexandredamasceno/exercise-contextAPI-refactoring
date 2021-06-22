import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './context/MyContext';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(cor, side) {
    this.setState({
      cars: {
        [cor]: side,
      }
    })
  }

  render() {
    const myObj = {
      ...this.state,
      moveCar: this.moveCar
    }

    return (
      <MyContext.Provider value={ myObj }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
