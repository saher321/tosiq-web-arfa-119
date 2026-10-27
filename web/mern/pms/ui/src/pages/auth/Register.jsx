import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { ActionButton, Divider, InputField, SelectField } from '../../components/MainLib'
import { ROLES } from '../../utils/common.js'
import { Link } from 'react-router'

const Register = () => {
  return (
    <AuthLayout>
      <div>
        <div className='my-3 mb-5'>
          <h1 className='text-2xl font-bold'>Register your self</h1>
          <p className='italic text-gray-500'>
            Give details to access dashboard
          </p>
        </div>
        <form>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <label htmlFor=''>Full name</label>
              <InputField type='text' hint={"John Doe"} />
            </div>
            <div className='col-span-12'>
              <label htmlFor=''>Email</label>
              <InputField type='email' hint={"john.doe@email.com"} />
            </div>
            <div className='col-span-12'>
              <label htmlFor=''>Password</label>
              <InputField type='password' hint={"xxxxxxxx"} />
            </div>
            <div className='col-span-12'>
              <label htmlFor=''>Role</label>
              <SelectField data={ROLES}/>
            </div>
            <div className="col-span-12">
              <ActionButton text={"Register"} />
            </div>
          </div>
        </form>
        <Divider />
        <div>
          <p>
            Already have an account? <Link className='text-blue-600'>Login</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
