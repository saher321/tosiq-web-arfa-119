import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { LuCarrot, LuCctv } from 'react-icons/lu'

const App = () => {

  const [counter, setCounter] = useState(1)

  const handleCounter = (action) => {
    if (action == "add") {

      if (counter >= 5) {
        toast.error("Our stock is limited")
        return;
      }
      setCounter(counter + 1)

    } else if (action == "sub" ){
      
      if (counter <= 1) {
        setCounter(1)
        toast.error("Qty could not be in negative")
        return;
      }
      setCounter(counter - 1)
    }
  }
  return (
    <div>App 
      <LuCarrot />
      <LuCctv />
      <hr />

      <div>
        <button onClick={() => handleCounter("add")}>Add</button>
        <span> {counter} </span>
        <button onClick={() => handleCounter("sub")}>Sub</button>
      </div>
    </div>
  )
}

export default App