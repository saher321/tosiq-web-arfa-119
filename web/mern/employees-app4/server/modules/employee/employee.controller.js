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
    const { name, email, phone, salary, designation } = req.body

    if (!name || !email || !phone || !salary || !designation){
        return res.send({
            status: false,
            message: "Fill all remaining field"
        })
    }

    try {
        const employee = await Employee.findOne({email: email})
        if (employee) {
            return res.send({
                status: false,
                message: "Employee already registered"
            })
        }

        const empObj = { name, email, phone, salary, designation }
        const newEmployee = await Employee.create(empObj)
        if (newEmployee){
            return res.send({
                status: true,
                message: "Employee has been added"
            })
        } else{
            return res.send({
                status: false,
                message: "Failed to add employee"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteEmployee = async (req, res) => {
    const {id} = req.params
    try {
        const employee = await Employee.findByIdAndDelete({_id: id})
        if (!employee) {
            return res.send({
                status: false,
                message: "Employee not found"
            })
        }

        return res.send({
            status: true,
            message: "Employee has been deleted",
            employees: await Employee.find({})
        })

    } catch (error) {
        console.log(error)
    }
}