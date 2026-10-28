import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { ActionButton, Divider, InputField, SelectField } from '../../components/MainLib'
import { ROLES } from '../../utils/common.js'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { REGISTER_API } from '../../utils/apis.js'

const Register = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleRegister = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(REGISTER_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        // redirect towards login page
        navigate("/auth/login", {replace: true})
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
          <h1 className='text-2xl font-bold'>Register yourself</h1>
          <p className='italic text-gray-500'>
            Give details to access dashboard
          </p>
        </div>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <label htmlFor=''>Full name</label>
              <InputField { ...register("fullName") } type='text' hint={"John Doe"} />
            </div>
            <div className='col-span-12'>
              <label htmlFor=''>Email</label>
              <InputField { ...register("email") } type='email' hint={"john.doe@email.com"} />
            </div>
            <div className='col-span-12'>
              <label htmlFor=''>Password</label>
              <InputField { ...register("password") } type='password' hint={"xxxxxxxx"} />
            </div>
            <div className='col-span-12'>
              <label htmlFor=''>Role</label>
              <SelectField { ...register("role") } data={ROLES}/>
            </div>
            <div className="col-span-12">
              <ActionButton loading={loading} text={"Register"} />
            </div>
          </div>
        </form>
        <Divider />
        <div>
          <p>
            Already have an account? 
            <Link to={"/auth/login"} className='text-blue-600'> Login</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
