import React from 'react'
import { Link } from 'react-router'

const LinkButton = ({title, url}) => {
  return (
    <Link to={url} className="bg-slate-800 text-white py-2 px-3 rounded shadow cursor-pointer hover:bg-slate-900">
        {title}
    </Link>
  )
}

export default LinkButton