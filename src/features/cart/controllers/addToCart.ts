import { CartsProductsTypes } from "../../../models";

export const addToCart = async (req, res) => {
  console.log(req.body,'asdasd')
  try {
    const dataUser = req.userData;
    const { productTypeId } = req.body;
    const qer = await CartsProductsTypes.create({
      idProductType: productTypeId,
      amount: 5,
      idCart: dataUser.Cart.id,
    });
    res.status(200).send(qer);
  } catch (err) {
    res.status(500).send({ msg: "error" });
  }
};
