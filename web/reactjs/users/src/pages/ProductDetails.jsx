import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { useParams } from 'react-router'
import { products } from '../utils/dummyData.js'
import { useData } from '../store/store.js'

const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const name = useData(state => state.name)
    const printData = useData(state => state.printData)

    const getProduct = () => {
        const p = products.find((product) => product.id == params.id)
        setProduct(p)
    }

    useEffect(() => {
        if (params.id > 0) {
            getProduct()
        }
    }, [params.id])

  return (
    <WebLayout>
        <div className='m-5'>
            Product details [{params.id}]
            <div>
                <button onClick={printData}>Click</button>
            </div>
        </div>
      
        <div className='m-5 bg-white p-3 rounded-lg shadow'>
            <div>
                Owner: {name}
            </div>
            <span className='text-[9px] text-gray-700'>SKU #{product.sku}</span>
            <span className='block font-bold'>{product.name}</span>
        </div>
    </WebLayout>
  )
}

export default ProductDetails
