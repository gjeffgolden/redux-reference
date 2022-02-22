import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())
  const handleReset = () => dispatch(reset())
  
  return (
    <div className="App">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
