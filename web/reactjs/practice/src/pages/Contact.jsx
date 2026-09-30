import React from 'react'
import Navbar from '../components/Navbar'
import useData from '../store/useData'
import toast from 'react-hot-toast'

const Contact = () => {
  const APP_NAME = useData(state => state.APP_NAME)
  const saveInfo = useData(state => state.saveInfo)

  const handleSave = () => {
    let name = "Usman"
    saveInfo(name)
    toast.success("Data saved successfully")
  }

  return (
    <div>
      <h3> {APP_NAME} </h3>

        <Navbar />
        Contact
        <br />
        <button onClick={handleSave}>Save information</button>
    </div>
  )
}

export default Contact