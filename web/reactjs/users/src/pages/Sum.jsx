import React, { useRef } from 'react'
import WebLayout from '../layouts/WebLayout'

const Sum = () => {
    const a = useRef(0)
    const b = useRef(0)
    const printSum = () => {
        let no1 = a.current.value 
        let no2 = b.current.value 
        let result = Number(no1) + Number(no2)
        console.log(result)
    }
  return (
    <WebLayout>
        <div className='mx-auto max-w-xl'>
            <div className='font-bold'>Sum</div>
            <div>
                <input type="number" placeholder='Enter number' ref={a} />
            </div>
            <div>
                <input type="number" placeholder='Enter number' ref={b} />
            </div>
            <div>
                <button onClick={printSum}>Find Sum</button>
            </div>
        </div>
        
    </WebLayout>
  )
}

export default Sum