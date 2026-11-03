import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout.jsx'
import { ActionButton, Divider, InputField } from '../../components/MainLib.jsx'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { LOGIN_API } from '../../utils/apis.js'

const ResetPassword = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleResetPassword = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(LOGIN_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        // redirect towards login page
        navigate("/", {replace: true}) // dashboard url
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
          <h1 className='text-2xl font-bold'>Reset password to continue</h1>
          <p className='italic text-gray-500'>
            By entering your otp password will be reset
          </p>
        </div>
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <label htmlFor=''>OTP</label>
              <InputField { ...register("OTP") } type='email' hint={"12345678"} />
            </div>
            <div className='col-span-12'>
              <label htmlFor=''>New password</label>
              <InputField { ...register("newPassword") } type='password' hint={"xxxxxxxx"} />
            </div>
            <div className="col-span-12">
              <ActionButton loading={loading} text={"Reset password"} />
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

export default ResetPassword
