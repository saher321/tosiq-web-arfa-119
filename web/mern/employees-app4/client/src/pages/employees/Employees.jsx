import React, { useEffect, useState } from "react";
import WebLayout from "../../layouts/WebLayout";
import axios from "axios";
import { EMPLOYEE_API } from "../../utils/apis.js";
import { Mail, Phone, Wallet } from "lucide-react";
import EmployeeCard from "../../components/EmployeeCard.jsx";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const response = await axios.get(EMPLOYEE_API);
      if (response.data.status == true) {
        setEmployees(response.data.employees);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <WebLayout>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <span className="block font-bold text-2xl">Employees</span>
            <span className="block text-sm">All employees record list</span>
          </div>
          <div>
            <button className="bg-sky-500 text-white py-2 px-3 rounded-lg shadow cursor-pointer hover:bg-sky-600">
              Add new employee
            </button>
          </div>
        </div>
        <div className="my-5">
          <div className="grid grid-cols-12 gap-3">
            {employees.map((emp, i) => {
              return (
                <div key={i} className="col-span-4">
                  <EmployeeCard emp={emp}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Employees;
