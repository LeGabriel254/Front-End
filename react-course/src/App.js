import React, {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <div>current value {count}</div>
   <button  value={count} onClick={() => setCount(count + 1)}>Increase</button>
   <button value={count}  onClick={() => setCount(count - 1)}>Decrease</button>
   <button value={count}  onClick={() => setCount(0)}>Set to Zero</button>
    </div>
  );
}

export default App;
