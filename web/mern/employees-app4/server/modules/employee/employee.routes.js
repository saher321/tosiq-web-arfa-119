import express from 'express'
import { addEmployee, deleteEmployee, employees, editEmployee, updateEmployee } from './employee.controller.js'

const employeeRouter = express.Router()

employeeRouter.get("/employees", employees)
employeeRouter.post("/employees/add", addEmployee)
employeeRouter.delete("/employees/delete/:id", deleteEmployee)
employeeRouter.get("/employees/edit/:id", editEmployee)
employeeRouter.put("/employees/update", updateEmployee)

export default employeeRouter