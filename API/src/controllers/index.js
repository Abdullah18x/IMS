/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

const controllers = {
    ...require('./pmm.controller'),
    ...require('./orders.controller'),
    ...require('./products.controller'),
    ...require('./reservations.controller')
}

module.exports = controllers