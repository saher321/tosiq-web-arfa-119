import React, { useState } from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { ActionButton, InputField, LinkButton } from '../../components/MainLib'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { ADD_CUSTOMER_API } from '../../utils/apis.js'

const AddCustomer = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleAddCustomer = async (data) => {
    try {
      console.log(data)
      setLoading(true)
      const response = await axios.post(ADD_CUSTOMER_API, data)
      console.log(response)
      if (response.data.status == true) {
        toast.success(response.data.message)
        navigate("/customers", {replace: true})
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
    <RoleBasedLayout>
      <div className='space-y-6'>
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-lg">Add new customer</div>
            <div className="text-sm text-gray-500">
              Fill all the fields for proper process
            </div>
          </div>

          <LinkButton
            url="/customers"
            text="View all"
          />
        </div>

        <div className="p-5 w-1/2 bg-white border border-gray-200 rounded-lg">
          <form onSubmit={handleSubmit(handleAddCustomer)} className="w-full">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <label>Client</label>
                <InputField
                { ...register("fullName") }
                  hint="John Doe"
                />
              </div>

              <div className="col-span-6">
                <label>Email</label>
                <InputField
                { ...register("email") }
                  hint="customer@email.com"
                />
              </div>

              <div className="col-span-6">
                <label>Contact #</label>
                <InputField
                { ...register("contact") }
                  hint="+92 312 3456789"
                />
              </div>

              <div className="col-span-6">
                <label>Join Date</label>
                <InputField
                { ...register("joinedDate") }
                  type='date'
                />
              </div>

              <div className="col-span-12">
                <label>Address</label>
                <InputField
                { ...register("address") }
                  hint="xyz, address"
                />
              </div>

              <div className="col-span-12">
                <ActionButton
                  loading={loading}
                  text="Add customer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </RoleBasedLayout>
  )
}

export default AddCustomer
