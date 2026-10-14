import React from 'react'
import { Link } from 'react-router'

const ActionButton = ({title}) => {
  return (
    <button className="bg-sky-500 text-white py-2 px-3 rounded shadow cursor-pointer hover:bg-sky-600">
        {title}
    </button>
  )
}

export default ActionButton