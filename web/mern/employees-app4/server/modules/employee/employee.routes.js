import express from 'express'
import { employees } from './employee.controller.js'

const employeeRouter = express.Router()

employeeRouter.get("/employees", employees)

export default employeeRouter