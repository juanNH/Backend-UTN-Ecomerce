//const { sequelize } = require('./../../../db/conection');
import {
  Products,
  ProductsTypes,
  /* ProductsTypesCategories, */ Categories,
} from "../../../models";

export const getProductByCategory = async (req, res) => {
  const { categoryId } = req.query;
  if(categoryId){
    try {
        const products = await Products.findAndCountAll({
          include: [
            {
              model: ProductsTypes,
              required: true,
              include: [
                {
                  model: Categories,
                  required: true,
                  where: [{ id: categoryId }],
                },
              ],
            },
          ],
        });
        return res.status(200).send(products);
      } catch (err) {
        return res.status(501).send({ err });
      }
  }
  return res.status(400).send({msg:"No estas enviando categoryId!"})
};  
