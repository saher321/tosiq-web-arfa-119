import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebLayout = ({children}) => {
  return (
    <div>
        <div className='mx-auto max-w-xl'>
            <Navbar />
            
            {children}
            
            <Footer />
        </div>
    </div>
  )
}

export default WebLayout
