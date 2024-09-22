import React, {useState} from 'react'

const Counter = () => {
  const [count,setCount] = useState(0)
  
  return (
    <div>
      <h1>Count:{count}</h1>

      <button value={count} onClick={() => setCount(count + 1)}>Increment</button>
      <button value={count} onClick={() => setCount(count - 1)}>Decrement</button>
      <button value={count} onClick={() => setCount(0)}>Reset</button>
      <button value={count} onClick={() => setCount((prev) => prev * -1)}>SwitchSign</button>
    </div>
  )
}

export default Counter