import { CartsProductsTypes } from "../../../models";

export const addToCart = async (req, res) => {
  try {
    const dataUser = req.userData;
    const { productTypeId } = req.body;
    const qer = await CartsProductsTypes.create({
      idProductType: productTypeId,
      idCart: dataUser.Cart.id,
    });
    res.status(200).send(qer);
  } catch (err) {
    res.status(500).send({ msg: "error" });
  }
};
