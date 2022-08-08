import { Carts, ProductsTypes, Shops } from "../../../models";

export const getCart = async (req, res) => {
  const dataUser = req.userData;
  try {
    const cart = await Carts.findOne({
      include: [
        {
          model: ProductsTypes,
          required: true,
          include: [
            {
              model: Shops,
            },
          ],
        },
      ],
      where: [{ idUser: dataUser.id }],
    });
    if (cart !== null) {
      return res.status(200).send({ isEmpty: false, cart: cart });
    }
    return res.status(202).send({ isEmpty: true });
  } catch (err) {
    res.status(500).send({ msg: "Error" });
  }
};
