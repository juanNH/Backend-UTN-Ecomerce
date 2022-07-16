import { Categories, Products, ProductsTypes } from "../../../models";


export const getAllProducts = async(_req, res) => {
    const {count, rows} = await Products.findAndCountAll({
        include: [
          {
            model: ProductsTypes,
            required: true,
            include: [
              {
                model: Categories,
                required: true,
              },
            ],
          },
        ],
      });
    res.status(200).send({count, rows})
}
