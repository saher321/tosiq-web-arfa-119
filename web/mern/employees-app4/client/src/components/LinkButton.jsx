import React from 'react'
import { Link } from 'react-router'

const LinkButton = ({title, url}) => {
  return (
    <Link to={url} className="bg-sky-500 text-white py-2 px-3 rounded shadow cursor-pointer hover:bg-sky-600">
        {title}
    </Link>
  )
}

export default LinkButton