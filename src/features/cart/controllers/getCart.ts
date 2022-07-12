import { Carts, ProductsTypes } from "../../../models";

export const getCart = async (_req, res) => {
  /* 
    const {userId} = req.query; */
  const { count, rows } = await ProductsTypes.findAndCountAll({
    include: [
      {
        model: Carts,
        required: true,
      },
    ],
  });
  res.status(200).send({ count, rows });
};
