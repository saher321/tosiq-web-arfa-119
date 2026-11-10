import { generateOtp, sendEmail } from "../../utils/common.js";
import User from "./user.model.js"
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    const { fullName, email, password, role } = req.body
    if (!fullName || !email || !password || !role) {
        return res.send({
            status: false,
            message: "Please fill all the fields"
        })
    }

    try {
        const user = await User.findOne({email: email})
        if (user) {
            return res.send({
                status: false,
                message: "This email has been already in use"
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const encPass = bcrypt.hashSync(password, salt);
        const newUser = { fullName, email, password: encPass, role }
        const result = await User.create(newUser)

        if (result){
            return res.send({
                status: true,
                message: "Account has been created"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to create an account"
            })
        }

    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.send({
            status: false,
            message: "Please fill all the fields"
        })
    }

    try {
        const user = await User.findOne({email: email})
        if (!user) {
            return res.send({
                status: false,
                message: "User not found"
            })
        }

        // checking password from db
        const result = await bcrypt.compare(password, user.password);
        console.log(result)
        if (result){
            return res.send({
                status: true,
                message: "User loggedin successfull"
            })
        } else {
            return res.send({
                status: false,
                message: "Password is wrong"
            })
        }

    } catch (error) {
        console.log(error)
    }
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.send({ status: false, message: "Provide valid email" })
    }

    try {
        const user = await User.findOne({email: email})
        if (!user) {
            return res.send({
                status: false,
                message: "Is this email is correct?"
            })
        }
        
        const otp = generateOtp()
        user.otp = otp
        const subject = "PMS: Reset password otp is"
        const content = `
        <strong> Hi, ${user.fullName} </strong> <br />
        <p> This is your <strong> ${otp} </strong> otp </p>
        <small> Note: Don't share this otp </small>
        `
        const status = await sendEmail(user.email, subject, content)
        if (status) {
            user.save()
            return res.send({
                status: true,
                message: "Otp has been sent to your email"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to send email"
            })
        }

        // console.log("OTP:", otp)


    } catch (error) {
        console.log(error)
    }
}

export const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body
    if (!otp || !newPassword) {
        return res.send({ status: false, message: "Provide remaining fields" })
    }

    try {
        const user = await User.findOne({email: email})
        if (!user) {
            return res.send({
                message: "Is this email is correct?"
            })
        }
        
        const isOtpCorrect = user.otp == otp ? true : false
        if (!isOtpCorrect) {
            return res.send({
                status: false,
                message: "Given otp is not valid"
            })
        } else {
            user.otp = null
            user.isOtpVerified = true
            user.save()
            return res.send({
                status: true,
                message: "Password has been reset"
            })
        }

        // console.log("OTP:", otp)


    } catch (error) {
        console.log(error)
    }
}