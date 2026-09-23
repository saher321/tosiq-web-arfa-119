import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { useData } from '../store/store.js'

const About = () => {
  const counter = useData(state => state.counter)
  const increaseCounter = useData(state => state.increaseCounter)
  return (
    <WebLayout>
      About page
      <div className='m-5'>
        <button 
        className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white p-1 rounded-lg'
        onClick={increaseCounter}>
          Count is [{counter}]
        </button>
      </div>
    </WebLayout>
  )
}

export default About
