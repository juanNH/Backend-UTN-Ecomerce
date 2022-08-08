import bcrypt from "bcrypt";
import { dateTime, randomCode } from "../../../helpers";
import { Carts, Users } from "../../../models";
import { ENCRYPTROUNDS } from "./../../../config/config";
export const signIn = async (req, res) => {
  const { userName, password, surname, name } = req.body;
  try {
    bcrypt.genSalt(ENCRYPTROUNDS, function (_err, salt) {
      bcrypt.hash(password, salt, async function (_err, hash) {
        try {
          const newUser = await Users.create({
            idCart: null,
            code: randomCode(),
            name: name,
            surname: surname,
            userName: userName,
            password: hash,
            createdAt: dateTime(),
            updatedAt: dateTime(),
            money: 1000000,
          });
          const newId = newUser.toJSON()["id"];
          console.log(newId);
          await Carts.create({
            code: randomCode(),
            idUser: newId,
            createdAt: dateTime(),
            updatedAt: dateTime(),
          });
        } catch (err) {
          return res.status(409).send({ err });
        }

        return res.status(200).send({ msg: "Usuario creado!" });
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(501).send({ err });
  }
};
