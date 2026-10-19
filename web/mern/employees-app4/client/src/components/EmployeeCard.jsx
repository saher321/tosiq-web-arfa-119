import React from "react";
import { Mail, Phone, Wallet } from "lucide-react";
import ActionButton from './ActionButton'
import LinkButton from "./LinkButton";
import axios from "axios";
import toast from 'react-hot-toast'
import { DEL_EMPLOYEE_API } from "../utils/apis";

const EmployeeCard = ({ emp, updatedEmployees }) => {

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${DEL_EMPLOYEE_API}/${id}`)
      if (response.data.status == true) {
        toast.success(response.data.message)
        updatedEmployees(response.data.employees)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      
      toast.error("Internal server error")
      console.error(error)
    }
  }
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-lg font-semibold text-indigo-600">
          {emp.name?.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-gray-900">
            {emp.name}
          </h3>
          <p className="mt-0.5 text-sm text-gray-500">{emp.designation}</p>
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
          Employee
        </span>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-100" />

      {/* Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gray-50 p-2 text-gray-500">
            <Mail size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-400">Email address</p>
            <p className="truncate text-sm font-medium text-gray-700">
              {emp.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gray-50 p-2 text-gray-500">
            <Phone size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-400">Phone number</p>
            <p className="text-sm font-medium text-gray-700">{emp.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gray-50 p-2 text-gray-500">
            <Wallet size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-400">Monthly salary</p>
            <p className="text-sm font-semibold text-gray-900">
              {Number(emp.salary).toLocaleString()}
            </p>
          </div>
        </div>
        
      {/* Divider */}
      <div className="my-5 border-t border-gray-100" />
      <div className="flex items-center justify-between">
        <LinkButton url={`/employees/edit/${emp._id}`} title="Edit" />
        <ActionButton fn={() => handleDelete(emp._id)} title="Delete" />
      </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
