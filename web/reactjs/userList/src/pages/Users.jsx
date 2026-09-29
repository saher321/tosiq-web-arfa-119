import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { USERS_API } from '../utils/apis.js'

const Users = () => { 
  const [users, setUsers] = useState([])
  const [flag, setFlag] = useState(false)

  const getUsers = async () => {
    setFlag(true)
    try {
      // REQUEST METHODS: Get, Post, Put / Patch, Delete
      const response = await axios.get(USERS_API)
      setUsers(response.data.users)
      setFlag(false)
    } catch (error) {
      console.error("ERROR: ", error)
      throw new Error(error)
    }
  }

  useEffect(() => { 
    getUsers() 
  }, [])

  return (
    <WebLayout>
      <div>
        
          {flag ? "Loading..." : 
          <div className='grid grid-cols-12 gap-5'>
            {users.map((user, i) => {
              return (
                <div key={i} className="col-span-4">
                  {/* <UserProfile user={user}/> */}
                  <div className='flex gap-3 bg-white shadow p-2 rounded-lg'>
                    <div>
                      <img className='h-12 w-12 rounded-full' src={user.image} alt="" />
                    </div>
                    <div className=''>
                      <div className='font-bold text-[14px]'>{user.firstName + " " + user.lastName}</div>
                      <div className='w-40 truncate text-[11px] text-gray-700'>
                        {user.company.title} | {user.company.department}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div> 
          }
      </div>
    </WebLayout>
  )
}

export default Users
