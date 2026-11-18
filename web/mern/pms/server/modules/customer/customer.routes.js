import express from 'express'
import { customers, addCustomer } from './customer.controller.js'

const customerRouter = express.Router()

customerRouter.get("/customers", customers)
customerRouter.post("/customers/add", addCustomer)

export default customerRouter