import {
  Carts,
  CartsProductsTypes,
  ProductsTypes,
  Users,
} from "../../../models";
export const payCart = async (req, res) => {
  const dataUser = req.userData;
  try {
    const { count, rows } = await ProductsTypes.findAndCountAll({
      include: [
        {
          model: Carts,
          where: [{ id: dataUser["id"] }],
        },
      ],
    });
    if (count === 0) {
      res.status(400).send({ msg: "No products selected" });
    }
    let totalPrice = 0;
    for (const product of rows) {
      totalPrice += product["price"];
    }
    if (totalPrice >= dataUser["money"]) {
      res.status(410).send({ msg: "Not enougth money" });
    }
    await Users.update(
      { money: dataUser["money"] - totalPrice },
      { where: { id: dataUser["id"] } }
    );
    await CartsProductsTypes.destroy({
      where: [
        {
          idCart: dataUser.Cart["id"],
        },
      ],
    });
    res.status(200).send({ msg: "Pago con exito" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "error" });
  }
};
