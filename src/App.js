import React, { Component } from 'react';
import Counter from './Counter';
import InputMirror from './InputMirror';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <InputMirror />
      </div>
    );
  }
}

export default App;
