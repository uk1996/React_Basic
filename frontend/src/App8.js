import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext(null);

const App = () => {
  const [value, setValue] = useState(0);
  const onIncrement = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <div>
      App: {value}
      <button onClick={onIncrement}>+1</button>
      <CounterContext.Provider value={{ value, onIncrement }}>
        <Level3 />
      </CounterContext.Provider>
    </div>
  );
};

const Level3 = () => {
  const { value, onIncrement } = useContext(CounterContext);
  return (
    <div>
      Level3:{value}
      <button onClick={onIncrement}>+1</button>
    </div>
  );
};

export default App;
