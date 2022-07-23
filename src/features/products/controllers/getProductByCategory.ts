import { ProductsTypes, Categories } from "../../../models";

export const getProductByCategory = async (req, res) => {
  const { categoryId } = req.query;
  if (categoryId) {
    try {
      const products = await ProductsTypes.findAndCountAll({
        include: [
          {
            model: Categories,
            required: true,
            where: [{ id: categoryId }],
          },
        ],
      });
      return res.status(200).send(products);
    } catch (err) {
      return res.status(501).send({ err });
    }
  }
  return res.status(400).send({ msg: "No estas enviando categoryId!" });
};
