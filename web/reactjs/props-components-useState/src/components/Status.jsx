import React from 'react'

const Status = ({status}) => {
  return (
    <span className= { status == "active" ? "active" : "inactive" } >
        {status}
    </span>
  )
}

export default Status