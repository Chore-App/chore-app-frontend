// src/App.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, CounterState, countSelector} from './CounterSlice';
import { RootState } from './Store';

const App: React.FC = () => {
  const count = useSelector((state:RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
