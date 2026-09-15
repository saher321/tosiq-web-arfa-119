import React from 'react'
import './assets/css/app.css'
const App = () => {
  // const liCss = {color: "red"}

  const showResult = () => {
    console.log("Button is clicked")
  }
  return (
    <div>
      Welcome to Reactjs 
      <button onClick={showResult} className='cursor-pointer m-2 bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800'>Explore more</button>
      <br />
      <ol>
        <li>Custom css / tailwindcss / bootstrap / other lib</li>
        <li>Components</li>
        <li>Props</li>
        <li>Layouts</li>
        <li style={{ color: "red" }}>Hooks (Features)</li>
        <li>Global state management</li>
      </ol>
    </div>
  )
}

export default App
