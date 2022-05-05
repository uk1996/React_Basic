import React from 'react';
import './App.css';
import Counter from './Counter';
import Messasge from './Message';
import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <Messasge />
        <Profile />
        <Counter />
        <Counter color="green" />
        <Counter color="blue" />
      </div>
    );
  }
}

export default App;
