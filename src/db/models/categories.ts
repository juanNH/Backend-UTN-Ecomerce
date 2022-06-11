module.exports = (sequealize, type) => {
  return sequealize.define(
    "Categories",
    {
      id: {
        type: sequealize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: sequealize.INTEGER,
        unique: true,
      },
      name: {
        type: sequealize.STRING,
      },
    },
    { timestamps: true }
  );
};
