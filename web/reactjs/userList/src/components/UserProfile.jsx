import React from 'react'
import { Link } from 'react-router'

const UserProfile = ({user}) => {
  return (
    <div className='flex gap-3 bg-white shadow p-2 rounded-lg'>
        <div>
            <img className='h-12 w-12 rounded-full' src={user.image} alt="" />
        </div>
        <div className=''>
            <div className='font-bold text-[14px]'>{user.firstName + " " + user.lastName}</div>
            <div className='w-40 truncate text-[11px] text-gray-700'>
            {user.company.title} | {user.company.department}
            </div>
            <div>
                <Link to={`/users/${user.id}/details`} className='mt-1 hover:bg-blue-100 block w-fit border-2 border-blue-100 rounded-full py-1 px-2 text-[9px]'>
                    View profile
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UserProfile
