import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout.jsx'
import { ActionButton, Divider, InputField } from '../../components/MainLib.jsx'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FORGOT_PASSWORD_API } from '../../utils/apis.js'

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleForgotPassword = async (data) => {
    localStorage.setItem("email", data.email)
    try {
      setLoading(true)
      const response = await axios.post(FORGOT_PASSWORD_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        // redirect towards login page
        navigate("/auth/reset-password", {replace: true}) // dashboard url
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <AuthLayout>
      <div>
        <div className='my-3 mb-5'>
          <h1 className='text-2xl font-bold'>Forgot your password</h1>
          <p className='italic text-gray-500'>
            Don't worry, we are here
          </p>
        </div>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <label htmlFor=''>Email</label>
              <InputField { ...register("email") } type='email' hint={"john.doe@email.com"} />
            </div>
            <div className="col-span-12">
              <ActionButton loading={loading} text={"Send OTP"} />
            </div>
          </div>
        </form>
        <Divider />
        <div>
          <p>
            Don't have an account? 
            <Link to={'/auth/register'} className='text-blue-600'> Register</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ForgotPassword
