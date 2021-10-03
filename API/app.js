/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

//Import npm libraries
const express = require("express");
const cors = require('cors');
const YAML = require("yamljs");
const { connector } = require("swagger-routes-express");
const swaggerUi = require('swagger-ui-express');

//Import Swagger Config
const options = require('./src/config/swaggerConfig')

//Import Controllers
const controllers = require("./src/controllers/index");

//Initializing express
const app = express();
const port = 3010;
app.use(cors())
app.set('trust proxy', 1)
app.use(express.json());


//Route Handling
const apiDefinition = YAML.load("api.yml");
const connect = connector(controllers, apiDefinition, options);

//Sync Models
const db = require("./src/models");
db.sequelize.authenticate();

//Connect App with YAML File
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDefinition));
connect(app);

//Listen Port
app.listen(port, () => {
  console.log("Server running at port " + port);
});
