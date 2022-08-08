import { CartsProductsTypes } from "../../../models";

export const removeToCart = async (req, res) => {
  try {
    const dataUser = req.userData;
    const { productTypeId } = req.body;

    await CartsProductsTypes.destroy({
      where: [
        {
          idProductType: productTypeId,
        },
        {
          idCart: dataUser.Cart.id,
        },
      ],
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ msg: "error" });
  }
};
