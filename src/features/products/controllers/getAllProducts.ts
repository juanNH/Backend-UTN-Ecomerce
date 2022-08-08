import { Op } from "sequelize";
import { Categories, ProductsTypes } from "../../../models";

export const getAllProducts = async (req, res) => {
  const { productName } = req.query;
  if (!productName) {
    const { count, rows } = await ProductsTypes.findAndCountAll({
      include: [
        {
          model: Categories,
          required: true,
        },
      ],
    });
    return res.status(200).send({ count, rows });
  }
  const { count, rows } = await ProductsTypes.findAndCountAll({
    include: [
      {
        model: Categories,
        required: true,
      },
    ],
    where: [
      {
        name: {
          [Op.like]: `%${productName}%`,
        },
      },
    ],
  });
  return res.status(200).send({ count, rows });
};
