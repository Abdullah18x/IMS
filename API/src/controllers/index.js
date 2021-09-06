/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// const pmmControllers = require('./pmm.controller')

const controllers = {
    ...require('./pmm.controller'),
    ...require('./pm.controller'),
    ...require('../middlewares/pmmAuth.middleware')
}

module.exports = controllers