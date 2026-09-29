import React from 'react'

const Footer = () => {
    const date = new Date()
    const y = date.getFullYear()
  return (
    <footer className='text-end my-5 p-5 rounded-2xl rounded bg-sky-700 text-white p-3'>
      &copy; COPYRIGHT &mdash; <small>{`2019 - ${y}`}</small>
    </footer>
  )
}

export default Footer
