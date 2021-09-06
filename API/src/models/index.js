/* eslint-disable prettier/prettier */
const dbConfig = require("../config/dbConfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false,
});

//DB Defenition
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Modle Insertion
db.pmm = require("./pmm.model")(sequelize, Sequelize);
db.pmmTokens = require("./tokens.model")(sequelize, Sequelize);
// db.pmmTokens = require("./pmmTokens.model")(sequelize, Sequelize);


//Relationships
db.pmm.hasMany(db.pmmTokens)
db.pmmTokens.belongsTo(db.pmm)

module.exports = db;

// PmmToken