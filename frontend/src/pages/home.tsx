
import React, { useState } from 'react'

const home = () => {
  const [cout, setcount] = useState(0);

  function IncrementCount() {
    setcount(cout + 1);
  }

  function DecrementCount() {
    if (cout > 0) {
      setcount(cout - 1);
    }
  }

  return (
    <div>
      <h1>Counter - {cout}</h1>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
    </div>
  )
}

export default home