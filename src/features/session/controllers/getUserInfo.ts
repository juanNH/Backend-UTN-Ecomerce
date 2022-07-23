import { Carts, Users } from "../../../models";

export const getUserInfo = async (req, res) => {
  const { code } = req.userData;
  try {
    const userData = await Users.findOne({
      where: [{ code: code }],
      include: [
        {
          model: Carts,
        },
      ],
    });
    if (userData !== null) {
      return res.status(200).send({
        userData: {
          name: userData["name"],
          surname: userData["surname"],
          money: userData["money"],
          userName: userData["userName"],
          cart: userData["Cart"],
        },
      });
    }
    return res.status(400).send({ msg: "notFound" });
  } catch (err) {
    console.log(err);
    return res.status(501).send({ err });
  }
};
