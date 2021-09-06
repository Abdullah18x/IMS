/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = (sequelize, Sequelize) => {
  const PmmTokens = sequelize.define("PmmTokens", {}, {
    timestamps: false,
  });
  return PmmTokens;
};
