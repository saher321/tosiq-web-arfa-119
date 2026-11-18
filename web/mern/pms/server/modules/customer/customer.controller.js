import Customer from "./customer.model.js"

export const customers = async (req, res) => {
    try {
        const customers = await Customer.find({})
        return res.send({
            status: true,
            customers
        })
    } catch (error) {
        console.log("Error:", error)
    }
}

export const addCustomer = async (req, res) => {
    const { fullName, email, contact, joinedDate, address } = req.body

    if (!fullName || !email || !contact || !joinedDate || !address) {
        return res.send({
            status: false,
            message: "Fill all remaining fields"
        })
    }

    try {
        const customer = await Customer.findOne({email: email})
        if (customer) {
            return res.send({
                status: false,
                message: "Customer already exist"
            })
        }

        const customerObj = { fullName, email, contact, joinedDate, address }
        const newCustomer = await Customer.create(customerObj)
        
        if (!newCustomer) {
            return res.send({
                status: false,
                message: "Failed to add new customer"
            })
        }

        return res.send({
            status: true,
            message: "Customer has been added"
        })

    } catch (error) {
        console.log("Error:",error)
    }
}