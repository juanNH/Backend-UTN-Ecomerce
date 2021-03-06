import { Categories, ProductsTypes } from "../../../models";

export const getAllProducts = async (_req, res) => {
  const { count, rows } = await ProductsTypes.findAndCountAll({
    include: [
      {
        model: Categories,
        required: true,
      },
    ],
  });
  res.status(200).send({ count, rows });
};
