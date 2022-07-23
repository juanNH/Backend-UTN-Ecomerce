import jwt from "jsonwebtoken";
import { Carts, Users } from "../models";
import { SECRET } from "./../config/config";

export const auth = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      let token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, SECRET, async (err, decoded) => {
        if (!err) {
          const idUser = decoded.idUser;
          try {
            const userData = await Users.findOne({
              include: [
                {
                  model: Carts,
                },
              ],
              where: [{ id: idUser }],
            });
            if (userData) {
              req.userData = userData.toJSON();
              console.log(req.userData);
              return next();
            }
            return res.status(400).send({ msg: "user problem" });
          } catch (err) {
            return res.status(400).send({ msg: "Bad Token" });
          }
        }
        return res.status(400).send({ msg: "Error en el token" });
      });
    } else {
      return res.status(400).send({ msg: "No token" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ msg: "Error inesperado, Intente mas tarde", err: err });
  }
};

module.exports = {
  auth,
};
