import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { USERS_API } from '../utils/apis.js'

const Users = () => { 
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      // REQUEST METHODS: Get, Post, Put / Patch, Delete
      const response = await axios.get(USERS_API)
      setUsers(response.data.users)
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
        <div className='grid grid-cols-12 gap-5'>
          {users.map((user, i) => {
            return (
              <div key={i} className="col-span-4">
                {user.firstName + " " + user.lastName}
              </div>
            )
          })}
        </div>
      </div>
    </WebLayout>
  )
}

export default Users
