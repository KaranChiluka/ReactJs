import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);

  let incrementCount = ()=>{
    setCount(count +1);
  }
  let decrementCount = ()=>{
    if(count > 0){
      setCount(count-1);
    }
    
  }
  return (
  <>
    <div className='app'>
      <h1>Counter</h1>
      <p>{count}</p>
      <div className='button'>
          <button className = "mib" onClick={incrementCount}>Increment</button>
          <button className = "mdb" onClick={decrementCount}>Decrement</button>
      </div>
    </div>
   </>
  );
}

export default App;
