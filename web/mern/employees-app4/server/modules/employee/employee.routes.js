import express from 'express'
import { addEmployee, deleteEmployee, employees } from './employee.controller.js'

const employeeRouter = express.Router()

employeeRouter.get("/employees", employees)
employeeRouter.post("/employees/add", addEmployee)
employeeRouter.delete("/employees/delete/:id", deleteEmployee)

export default employeeRouter