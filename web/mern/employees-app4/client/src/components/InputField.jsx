import React from 'react'

const InputField = ({type = "text", hint, ...otherProps}) => {
  return (
    <input
    { ...otherProps }
    type={type}
    placeholder={hint}
    className='py-2 px-3 w-full bg-gray-200 rounded border border-gray-400 focus:outline-sky-600'
    />
  )
}

export default InputField