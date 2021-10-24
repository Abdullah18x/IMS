/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

//Import npm libraries
const express = require("express");
const cors = require('cors');
const YAML = require("yamljs");
const { connector } = require("swagger-routes-express");
const swaggerUi = require('swagger-ui-express');
// const fs = require('fs');
// const dir = '/uploads';

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
app.use(express.static('uploads'));


//Route Handling
const apiDefinition = YAML.load("api.yml");
const connect = connector(controllers, apiDefinition, options);

//Sync Models
const db = require("./src/models");
db.sequelize.authenticate();

//Connect App with YAML File
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDefinition));
connect(app);

//Creating necessary folders
// if (!fs.existsSync(dir)){
//   fs.mkdirSync(dir);
// }

//Listen Port
app.listen(port, () => {
  console.log("Server running at port " + port);
});
