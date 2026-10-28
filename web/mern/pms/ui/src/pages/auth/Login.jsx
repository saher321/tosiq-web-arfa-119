import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout.jsx'
import { ActionButton, Divider, InputField, SelectField } from '../../components/MainLib.jsx'
import { ROLES } from '../../utils/common.js'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const handleLogin = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post("", data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        // redirect towards login page
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
          <h1 className='text-2xl font-bold'>Login to continue</h1>
          <p className='italic text-gray-500'>
            Give details to access dashboard
          </p>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <label htmlFor=''>Email</label>
              <InputField { ...register("email") } type='email' hint={"john.doe@email.com"} />
            </div>
            <div className='col-span-12'>
              <label htmlFor=''>Password</label>
              <InputField { ...register("password") } type='password' hint={"xxxxxxxx"} />
            </div>
            <div className="col-span-12">
              <ActionButton loading={loading} text={"Login"} />
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

export default Login
