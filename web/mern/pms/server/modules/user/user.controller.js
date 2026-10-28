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

export const login = async (req, res) => {}