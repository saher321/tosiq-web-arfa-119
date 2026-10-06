import express from 'express'
import { getProductCategories } from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.get("/product-categories", getProductCategories)

export default productRouter