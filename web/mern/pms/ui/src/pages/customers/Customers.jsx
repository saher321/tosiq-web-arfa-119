
import React from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { LinkButton } from '../../components/MainLib'

const Customers = () => {

    const customers = [
        {
            id: 1,
            name: 'Ali Ahmed',
            email: 'ali@example.com',
            phone: '+92 300 1234567',
            address: 'Lahore, Pakistan',
            joined: 'Nov 10, 2026',
        },
        {
            id: 2,
            name: 'Usman Khan',
            email: 'usman@example.com',
            phone: '+92 321 7654321',
            address: 'NY, USA',
            joined: 'Nov 12, 2026',
        },
    ]

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

                                {customers.map((customer) => (
                                    <tr
                                        key={customer.id}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 text-gray-500">
                                            {customer.id}
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">
                                                {customer.name}
                                            </div>
                                            <div className="text-gray-500 text-xs mt-1">
                                                {customer.email}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {customer.phone}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {customer.joined}
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
