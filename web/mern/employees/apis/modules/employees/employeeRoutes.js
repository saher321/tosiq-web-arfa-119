import express from 'express'
import { employees } from './employeeController.js'

const employeeRouter = express.Router()

employeeRouter.get("/employees", employees)

export default employeeRouter