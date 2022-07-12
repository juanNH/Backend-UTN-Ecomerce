import { Products } from "../../../models";


export const getAllProducts = async(_req, res) => {
    const {count, rows} = await Products.findAndCountAll();
    res.status(200).send({count, rows})
}
