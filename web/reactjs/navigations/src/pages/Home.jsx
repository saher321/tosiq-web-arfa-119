import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'

const Home = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseData = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    if (counter == 5) {
      console.log("Counter value is set to:", counter)
    }
  }, [counter])

  useEffect(() => {
    console.log("Call only first time")
  }, [])

  useEffect(() => {
    console.log("Runs on every click / redender / state change")
  })
  return (
    <WebLayout>
      Home page [{counter}]
      <hr />
      <div>
        <button onClick={increaseData}>Click</button>
      </div>
    </WebLayout>
  )
}

export default Home
