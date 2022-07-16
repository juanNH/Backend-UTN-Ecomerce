import { EXPIRES, SECRET } from "../../../config/config";
import { Users } from "../../../models";
const jwt = require("jsonwebtoken");

export const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const resultUser = await Users.findOne({
      where: [{ userName: userName }, { password: password }],
    });
    if (resultUser === null) {
      return res.status(405).send({ msg: "notCorrect password or username" });
    }
    const dataJWT = {
      idUser: resultUser["id"],
    };
    const token = jwt.sign(dataJWT, SECRET, { expiresIn: EXPIRES });

    //return res.status(200).send({"auth-token":token});
    return res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
  } catch (err) {
    console.log(err);
    return res.status(501).send({ err });
  }
};
