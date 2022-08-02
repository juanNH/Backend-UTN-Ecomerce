import { Carts, ProductsTypes } from "../../../models";

export const getCart = async (req, res) => {
  const dataUser = req.userData;
  try {
    const cart = await Carts.findOne({
      include: [
        {
          model: ProductsTypes,
          required: true,
        },
      ],
      where: [{ idUser: dataUser }],
    });
    if (cart !== null) {
      return res.status(200).send(cart);
    }
    return res.status(202).send({ msg: "cart empty" });
  } catch (err) {
    res.status(500).send({ msg: "Error" });
  }
};
