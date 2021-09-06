/* eslint-disable prettier/prettier */
module.exports = (sequelize, Sequelize) => {
  const PmmToken = sequelize.define(
    "PmmToken",
    {
      token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return PmmToken;
};
