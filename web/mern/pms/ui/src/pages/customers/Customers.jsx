
import React from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { LinkButton } from '../../components/MainLib'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { CUSTOMERS_API } from '../../utils/apis'
import { useState } from 'react'

const Customers = () => {

    const [ customers, setCustomers ] = useState([])
    
    const getAllCustomers = async () => {
        try {
            const response = await axios.get(CUSTOMERS_API)
            if (response.data.status == true) {
                setCustomers(response.data.customers)
            } else {
                toast.error("Failed to fetch data")
            }
        } catch (error) {
            toast.error("Internal server error")
            console.log("Error:", error)
        }
    }

    useEffect(() => {
        getAllCustomers()
    }, [])

    return (
        <RoleBasedLayout>
            <div className="space-y-6">

                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-bold text-lg">Customers</div>
                        <div className="text-sm text-gray-500">
                            All customers record
                        </div>
                    </div>

                    <LinkButton
                        url="/customers/add"
                        text="Add new customer"
                    />
                </div>

                {/* Table */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">

                            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4">#</th>
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Phone</th>
                                    <th className="px-6 py-4">Joined Date</th>
                                    <th className="px-6 py-4">Address</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">

                                {customers.map((customer, i) => (
                                    <tr
                                        key={i}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 text-gray-500">
                                            {i+1}
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">
                                                {customer.fullName}
                                            </div>
                                            <div className="text-gray-500 text-xs mt-1">
                                                {customer.email}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {customer.contact}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {customer.joinedDate}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {customer.address}
                                        </td>


                                        <td className="px-6 py-4">
                                            <div className='flex gap-3'>
                                                <button className="text-blue-600 hover:text-blue-800 font-medium">
                                                    View
                                                </button>

                                                <button className="text-gray-600 hover:text-gray-900 font-medium">
                                                    Edit
                                                </button>

                                                <button className="text-gray-600 hover:text-gray-900 font-medium">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default Customers
