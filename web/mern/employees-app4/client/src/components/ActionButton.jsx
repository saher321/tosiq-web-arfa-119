import React from 'react'
import { Link } from 'react-router'

const ActionButton = ({title, fn}) => {
  return (
    <button onClick={fn} className="bg-slate-800 text-white py-2 px-3 rounded shadow cursor-pointer hover:bg-slate-900">
        {title}
    </button>
  )
}

export default ActionButton