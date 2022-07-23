import { Categories, ProductsTypes, Shops } from "../../../models";

export const getProductByCode = async (_req, res) => {
  const { count, rows } = await ProductsTypes.findAndCountAll({
    include: [
      {
        model: Shops,
        required: true,
      },
      {
        model: Categories,
        required: true,
      },
    ],
  });
  res.status(200).send({ count, rows });
};
