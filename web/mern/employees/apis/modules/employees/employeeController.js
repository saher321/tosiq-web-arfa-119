import { employeeList } from "./employeeData.js"

export const employees = (req, res) => {
    return res.send({
        status: true,
        employeeList
    })
}