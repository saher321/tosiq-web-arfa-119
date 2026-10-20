import React from 'react'
import WebLayout from '../layouts/WebLayout'

const Home = () => {
  return (
    <WebLayout>
        <div>
            <div className='flex items-center gap-3 bg-sky-200 p-5 rounded-lg'>
                <span className='font-bold'>Information:</span>
                <p>Welcome back! Admin</p>
            </div>
        </div>
    </WebLayout>
  )
}

export default Home