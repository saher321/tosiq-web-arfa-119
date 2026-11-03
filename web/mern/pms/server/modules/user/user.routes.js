import express from 'express'
import { forgotPassword, login, register } from './user.controller.js'

const userRouter = express.Router()

userRouter.post("/auth/register", register)
userRouter.post("/auth/login", login)
userRouter.post("/auth/forgot-password", forgotPassword)

export default userRouter