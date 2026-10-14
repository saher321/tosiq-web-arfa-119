import Employee from "./employee.model.js"

export const employees = async (req, res) => {
    try {
        const employees = await Employee.find({})
        return res.send({
            status: true,
            employees
        })
    } catch (error) {
        console.error(error)
    }
}

export const addEmployee = async (req, res) => {
    console.log(req.body)
}