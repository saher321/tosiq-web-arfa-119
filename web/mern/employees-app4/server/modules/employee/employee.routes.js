import express from 'express'
import { addEmployee, employees } from './employee.controller.js'

const employeeRouter = express.Router()

employeeRouter.get("/employees", employees)
employeeRouter.post("/employees/add", addEmployee)

export default employeeRouter