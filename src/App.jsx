import { useState } from 'react'
import './App.css'
function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='wrapper'>
      <div className='couner-wrapper'>
        <h1 className="display">{counter}</h1>
        <div className="btn">
          <button onClick={()=>setCounter(counter+1)}>increment</button>
          <button onClick={()=>setCounter(counter-1)}>decrement</button>
        </div>
      </div>
    </div>
  )
}

export default App
