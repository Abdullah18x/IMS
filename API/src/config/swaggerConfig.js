/* eslint-disable prettier/prettier */
const pmmAuth = require('../middlewares/pmmAuth.middleware')
module.exports = {
    security: {
        pmmAuth: pmmAuth.authPmm
    }
}