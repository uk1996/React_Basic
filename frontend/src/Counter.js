import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static defaultProps = {
    color: 'red',
  };

  static propTyeps = {
    color: PropTypes.string,
  };

  state = {
    color: this.props.color,
    value: 0,
  };

  onClick = () => {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  onContextMenu = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { value: prevState.value >= 1 ? prevState.value - 1 : 0 };
    });
  };

  render() {
    const { color, value } = this.state;
    return (
      <div
        onClick={this.onClick}
        onContextMenu={this.onContextMenu}
        style={{ ...style, backgroundColor: color }}
      >
        {value}
      </div>
    );
  }
}

const style = {
  width: '100px',
  height: '100px',
  display: 'inline-block',
  borderRadius: '50px',
  textAlign: 'center',
  lineHeight: '100px',
  userSelect: 'none',
  fontSize: '3rem',
  margin: '1rem',
};

export default Counter;
