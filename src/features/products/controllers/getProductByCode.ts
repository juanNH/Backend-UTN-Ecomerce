import { Categories, ProductsTypes, Shops } from "../../../models";

export const getProductByCode = async (req, res) => {
  const { code } = req.query;
  try {
    const Product = await ProductsTypes.findOne({
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
      where: [{ code: code }],
    });
    if (Product !== null) {
      return res.status(200).send(Product);
    }
    return res.status(405).send({ msg: "Producto no existente" });
  } catch (err) {
    res.status(500).send({ msg: "Error" });
  }
};
