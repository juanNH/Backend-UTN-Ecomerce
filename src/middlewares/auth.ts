import jwt from "jsonwebtoken";
import { SECRET } from "./../config/config";

const auth = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      // Comprueba la validez de este token
      let token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, SECRET, (err, decoded) => {
        if (!err) {
          req.userId = decoded.userId;
          return next();
        }
        return res.status(400).send({ msg: "Error en el token" });
      });
    }
    return res.status(400).send({ msg: "Error en el token" });
  } catch (err) {
    res
      .status(500)
      .send({ msg: "Error inesperado, Intente mas tarde", err: err });
  }
};

module.exports = {
  auth,
};
