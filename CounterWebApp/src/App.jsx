import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='counter'>
         <h1>{counter}</h1>
         <div>
          <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
          <button onClick={()=>{setCounter(counter-1)}}>Decrement</button>
         </div>
    </div>
  )
}

export default App;
