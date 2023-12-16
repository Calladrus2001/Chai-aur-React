import { useState } from "react"
import "./index.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black">
      <p className="mx-2 py-6 text-3xl font-bold text-white">Counter App</p>
      <div>
        <button className="mx-2 p-1 bg-green-400 font-semibold rounded-sm" onClick={() => setCount(count + 1)}>
          Increment
        </button> <></>

        <button className="mx-2 p-1 bg-green-400 font-semibold rounded-sm" onClick={() => count > 0 ? setCount(count - 1): 0}>
          Decrement
        </button>

        <p className="mx-2 py-2 text-white font-bold">Count: {count}</p>      
      </div>
    </div>
  )
}

export default App
