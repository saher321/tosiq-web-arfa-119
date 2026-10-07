import React, { useEffect, useState } from "react";
import WebLayout from "../../layouts/WebLayout";
import axios from "axios";

const Employees = () => {
    const [employeesList, setEmployeesList] = useState([])


    const getEmployees = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/employees")
            setEmployeesList(response.data.employeeList)
        } catch (error) {
            console.error("ERR:", error)
        }
    }

    useEffect(() => {
        getEmployees()
    }, [])


  return (
    <WebLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and view all employees.
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            + Add Employee
          </button>
        </div>

        {/* Employee Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-600">
                    ID
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-600">
                    Name
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-600">
                    Email
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-600">
                    Designation
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-600">
                    Salary
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-600">
                    Account Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                { employeesList.map((emp) => {
                  return (
                    <tr className="transition hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-700">
                        {emp.id}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {emp.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {emp.email}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {emp.designation}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {emp.salary}
                      </td>
                      <td className="px-6 py-4">
                        { emp.accountStatus == "active" ?
                        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          Active
                        </span> :
                        <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                          Inactive
                        </span> 
                        }
                      </td>
                    </tr>
                  )
                })
                }

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Employees;