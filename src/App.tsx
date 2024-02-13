// src/App.tsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, fetchUserCount, userCount} from './CounterSlice';
import { AppDispatch, RootState } from './Store';

// sample app for setting up boilerplate, replace as needed.
const App: React.FC = () => {
  // setup for dispatching actions
  const dispatch = useDispatch<AppDispatch>();

  // redux state variables
  const count = useSelector((state:RootState) => state.counter.count);
  const useCountState = useSelector((state:RootState)=> state.counter.userCount);

  // tie all action calls into a handler callback like this. Down the line ALL actions callbacks will be defined in its own place and not called from within components
  const handleFetchButtonClick = () => {
    dispatch(fetchUserCount())
  }
  // basic useState for holding state variables for a component level. These can be passed as props as needed to child components.
  const [userCount, setUserCount] = useState(0)

  // use effect allows for value to update on change of the state variable, this means it will re-render.
  useEffect(()=> {
    setUserCount(useCountState?.count)
  },[useCountState])

  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1>
        UserCount: {userCount}
        <button onClick={handleFetchButtonClick}>UserCount</button>
      </h1>
    </div>
  );
};

export default App;
