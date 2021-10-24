/* eslint-disable prettier/prettier */
const pmmAuth = require('../middlewares/pmmAuth.middleware')
const uploadFile = require('../middlewares/uploadFile.middleware')
module.exports = {
    security: {
        pmmAuth: pmmAuth.authPmm
    },
    middleware: {
        uploadFile: uploadFile.single('imageForUpload')
    }
}