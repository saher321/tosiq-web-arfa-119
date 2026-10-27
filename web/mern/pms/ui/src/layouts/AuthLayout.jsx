import React from 'react'
import { Children } from 'react'
import { APP_NAME_LC } from '../utils/common.js'

const AuthLayout = ({children}) => {
  return (
    <div className='h-screen bg-gray-50'>
        <div className='text-[#359FA0] p-5 italic font-bold'>
            {APP_NAME_LC}
        </div>
          <div className='my-10 max-w-md mx-auto'>
              {/* forms: login, signup, etc */}
              {children}
        </div>
    </div>
  )
}

export default AuthLayout
