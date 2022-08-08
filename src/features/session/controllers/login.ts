import { EXPIRES, SECRET } from "../../../config/config";
import { Users } from "../../../models";
import bcrypt from "bcrypt";

const jwt = require("jsonwebtoken");
export const logIn = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const resultUser = await Users.findOne({
      where: [{ userName: userName }],
    });
    if (resultUser === null) {
      return res.status(405).send({ msg: "notCorrect password or username" });
    }
    const response = await bcrypt.compare(password, resultUser["password"]);

    if (response) {
      const dataJWT = {
        idUser: resultUser["id"],
      };
      const token = jwt.sign(dataJWT, SECRET, { expiresIn: EXPIRES });

      return res.header("auth-token", token).json({
        error: false,
        data: {
          token,
          user: {
            name: resultUser["name"],
            userName: resultUser["userName"],
          },
        },
      });
    }
    return res.status(405).send({ msg: "notCorrect password or username" });
  } catch (err) {
    console.log(err);
    return res.status(501).send({ err });
  }
};
