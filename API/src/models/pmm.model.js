/* eslint-disable prettier/prettier */
module.exports = (sequelize, Sequelize) => {
    const Pmm = sequelize.define(
      "Pmm",
      {
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      {
        timestamps: false,
      }
    );
    return Pmm;
  };
  