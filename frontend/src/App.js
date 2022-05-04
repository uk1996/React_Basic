import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  state = { myquery: '', language: '' };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Counter onClick={() => console.log('clicked')} />
        <input name="myquery" onChange={this.onChange} />
        <input name="language" onChange={this.onChange} />
        <hr />
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default App;
