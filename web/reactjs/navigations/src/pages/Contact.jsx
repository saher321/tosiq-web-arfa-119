import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { Link } from 'react-router'
import { products } from '../utils/dummyData.js'

const Contact = () => {
  return (
    <WebLayout>
      <div className="grid grid-cols-12 gap-1">
        {
        products.map((product, i) => {
          return (
            <div key={i} className="col-span-4">
              <div className='m-5 bg-white p-3 rounded-lg shadow'>
                <span className='block font-bold'>{product.name}</span>
                <Link to={`/contact-us/${product.id}`} className='text-[11px] text-blue-600 underline'>Show details</Link>
              </div>
            </div>
          )
        })
      }
      </div>
    </WebLayout>
  )
}

export default Contact
