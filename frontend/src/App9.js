import React, { createContext, useContext, useReducer, useState } from 'react';

const CounterContext = createContext();

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

const reducer = (prevState, action) => {
  const { type, payload: value = 1 } = action;
  if (type === INCREMENT) {
    return prevState + value;
  } else if (type === DECREMENT) {
    return prevState - value;
  }
  return prevState;
};

const actionIncremnet = (value) => ({ type: INCREMENT, payload: value });
const actionDecremnet = (value) => ({ type: DECREMENT, payload: value });

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1 onClick={() => dispatch(actionIncremnet(10))}>App9: {state}</h1>
      <CounterContext.Provider value={{ state, dispatch }}>
        <GameBox />
      </CounterContext.Provider>
    </div>
  );
};

const GameBox = () => {
  const { state, dispatch } = useContext(CounterContext);
  const onClick = () => {
    dispatch(actionDecremnet(5));
  };
  return (
    <div>
      <h2 onClick={onClick}>GameBox: {state}</h2>
    </div>
  );
};

export default App;
