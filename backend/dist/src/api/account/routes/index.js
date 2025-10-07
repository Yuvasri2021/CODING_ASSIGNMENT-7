// src/api/account/routes/index.js
'use strict';
const customRoutes = require('./account');
module.exports = {
    routes: [...customRoutes.routes],
};
