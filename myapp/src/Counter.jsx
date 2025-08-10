
import React,{useState} from "react"
function Counter(){
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count +1);
  }
  const decrement = () => {
    setCount(count-1);
  }
  const reset = () => {
    setCount(0)
  }
  return(
    <>
    <div className="counter-container">
    <p className="count-display">{count}</p>
    <button className="count-btn" onClick={increment}>increment</button>
    <button className="count-btn" onClick={reset}>reset</button>
    <button className="count-btn" onClick={decrement}>decrement</button>
    </div>
    </>
  )
}
export default Counter