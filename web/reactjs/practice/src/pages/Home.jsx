import React from 'react'
import Navbar from '../components/Navbar'
import useData from '../store/useData'

const Home = () => {
  const APP_NAME = useData(state => state.APP_NAME)
  const greetings = useData(state => state.greetings)
  return (
    <div>
        <h3>{APP_NAME}</h3>
        <Navbar />
        Home
        <br />
        <button onClick={greetings}>Click me</button>
    </div>
  )
}

export default Home