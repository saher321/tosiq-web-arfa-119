import React, { useEffect, useState } from "react";
import WebLayout from "../../layouts/WebLayout";
import axios from "axios";

const Employees = () => {
    const [employeesList, setEmployeesList] = useState([])


    const getEmployees = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/employees")
            console.log(response.data)
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
                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    1
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Ali Khan
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    ali.khan@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Frontend Developer
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 85,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    2
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Sara Ahmed
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    sara.ahmed@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    UI/UX Designer
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 75,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    3
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Usman Malik
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    usman.malik@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Backend Developer
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 95,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    4
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Ayesha Noor
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    ayesha.noor@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Project Manager
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 120,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    5
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Hamza Iqbal
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    hamza.iqbal@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    QA Engineer
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 70,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                      Inactive
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    6
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Maham Fatima
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    maham.fatima@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Content Writer
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 65,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    7
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Bilal Shah
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    bilal.shah@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    DevOps Engineer
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 110,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    8
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Hira Javed
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    hira.javed@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Digital Marketing Executive
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 80,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                      Inactive
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    9
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Omar Farooq
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    omar.farooq@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Software Engineer
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 100,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    10
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Zainab Raza
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    zainab.raza@example.com
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    HR Manager
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rs. 90,000
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Employees;