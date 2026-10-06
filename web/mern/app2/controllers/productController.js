import { productCategories } from "../utils/dummyData.js"

export const getProductCategories = (req, res) => {
    return res.send({
        status: true,
        productCategories
    })
}
