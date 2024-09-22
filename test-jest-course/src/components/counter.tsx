import React, {useState} from 'react'

const Counter = ({initialCount}) => {
  const [count,setCount] = useState(initialCount)
  return (
    <div>
      <h1>Count:{count}</h1>

      <button>Increanment</button>
      <button>Decreament</button>
      <button>Reset</button>
      <button>SwitchSign</button>
    </div>
  )
}

export default Counter